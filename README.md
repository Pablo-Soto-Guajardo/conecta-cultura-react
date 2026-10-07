# Conecta Cultura (React + Vite)

Cartelera de actividades culturales construida con React, Vite y React Bootstrap
para la asignatura Desarrollo FullStack II (EA2).

**Autor:** Pablo Esteban Soto Aranda

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Rutas

| URL | Página | Qué muestra |
| --- | --- | --- |
| `/` | `Inicio` | Portada con accesos a las secciones |
| `/actividades` | `Actividades` | Cartelera completa con filtro por categoría |
| `/actividades/:id` | `DetalleActividad` | Detalle de una actividad según su id |
| `/categorias` | `Categorias` | Lista de categorías con su cantidad de actividades |
| `/categorias/:nombre` | `CategoriaDetalle` | Actividades de una categoría |
| `/ofertas` | `Ofertas` | Actividades gratuitas o de hasta $5.000 |
| `/inscripciones` | `Inscripciones` | Inscripciones guardadas, con opción de eliminar |
| `/admin/actividades` | `AdminActividades` | Formulario para crear actividades y tabla para eliminarlas |
| cualquier otra | `NoEncontrada` | Página 404 |

## Estructura

| Carpeta / archivo | Responsabilidad |
| --- | --- |
| `src/components` | Piezas reutilizables (Cabecera, Navegacion, TarjetaActividad, MisInscripciones, PiePagina) |
| `src/pages` | Páginas asociadas a rutas públicas |
| `src/pages/admin` | Vistas de administración (AdminActividades, FormularioActividad) |
| `src/data` | Datos simulados (actividades.js) |
| `src/main.jsx` | Monta la aplicación dentro de `BrowserRouter` |
| `src/App.jsx` | Estado compartido (actividades e inscripciones) y mapa de rutas |
| `deploy/conecta-cultura.nginx.conf` | Configuración de Nginx para publicar la SPA en EC2 |

## Funcionalidades

- Navegación SPA con React Router (`Routes`, `Route`, `Link`, `NavLink`, `useParams`).
- Diseño responsivo con la grilla de React Bootstrap (`Container`, `Row`, `Col`).
- Cartelera generada desde un arreglo de actividades mediante `map` y props.
- Filtro por categoría con `useState`.
- Inscripciones sin duplicados y con opción de eliminar.
- Formulario controlado con validación y mensajes de error junto a cada campo.
- Crear y eliminar actividades desde la vista de administración.
- Persistencia de actividades e inscripciones en `localStorage` con `useEffect`.

## Diseño responsivo

La cartelera usa `Container`, `Row` y `Col` de React Bootstrap con
`xs={12} md={6} lg={4}`: una tarjeta por fila en móvil, dos desde 768 px y
tres desde 992 px.

| Ancho | Columnas | Menú | Resultado de la revisión |
| --- | --- | --- | --- |
| 375 px | 1 | Botón hamburguesa | Sin desplazamiento horizontal; formulario en una columna; la tabla de administración se desplaza dentro de su contenedor |
| 768 px | 2 | Botón hamburguesa | Sin desplazamiento horizontal; dos tarjetas por fila |
| 1024 px | 3 | Enlaces visibles | Sin desplazamiento horizontal; tabla de administración completa |
| 1440 px | 3 | Enlaces visibles | Contenido limitado a 1320 px; formulario y tabla de administración lado a lado |

Incidencias corregidas en la revisión:

- A 768 px los seis enlaces del menú no cabían y generaban desplazamiento
  horizontal: el menú ahora se expande desde `lg` (992 px).
- En móvil el menú quedaba abierto después de elegir una opción: ahora se
  cierra al navegar.
- La página activa del menú se distinguía solo por el color: ahora también va
  subrayada y en negrita.
- Los botones "Eliminar" eran pequeños para uso táctil: ahora tienen el tamaño
  normal de Bootstrap.
- En pantallas anchas los textos y el formulario ocupaban todo el ancho: se
  limitaron con columnas de la grilla.

Lista de comprobación: no hay desplazamiento horizontal en ninguna ruta, el
foco es visible al navegar con teclado, todos los campos tienen su `label`
asociado, la tabla usa un contenedor `table-responsive` y los mensajes de error
y de estado se entregan con texto, no solo con color. El proyecto todavía no
incluye imágenes; cuando se agreguen deben llevar `img-fluid` y `alt`.

## Despliegue en AWS EC2

| Dato | Valor |
| --- | --- |
| URL pública | `http://IP_PUBLICA` (pendiente: completar después de desplegar) |
| Fecha de despliegue | pendiente |
| Commit desplegado | pendiente |
| Servidor | Nginx sobre Ubuntu Server LTS |

Resumen del procedimiento:

1. En el computador local, generar y revisar el build:

   ```bash
   npm run build
   npm run preview
   ```

2. Copiar el build y la configuración de Nginx a la instancia (PowerShell,
   dentro de la carpeta del proyecto):

   ```powershell
   ssh -i "RUTA\CLAVE.pem" ubuntu@IP_PUBLICA "mkdir -p /tmp/conecta-cultura"
   scp -i "RUTA\CLAVE.pem" -r ".\dist\*" ubuntu@IP_PUBLICA:/tmp/conecta-cultura/
   scp -i "RUTA\CLAVE.pem" ".\deploy\conecta-cultura.nginx.conf" ubuntu@IP_PUBLICA:/tmp/
   ```

3. En la instancia EC2, publicar los archivos y activar el sitio:

   ```bash
   sudo mkdir -p /var/www/conecta-cultura
   sudo cp -a /tmp/conecta-cultura/. /var/www/conecta-cultura/
   sudo chown -R www-data:www-data /var/www/conecta-cultura
   sudo find /var/www/conecta-cultura -type d -exec chmod 755 {} \;
   sudo find /var/www/conecta-cultura -type f -exec chmod 644 {} \;
   sudo cp /tmp/conecta-cultura.nginx.conf /etc/nginx/sites-available/conecta-cultura
   sudo ln -sfn /etc/nginx/sites-available/conecta-cultura /etc/nginx/sites-enabled/conecta-cultura
   sudo rm -f /etc/nginx/sites-enabled/default
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. Comprobar la portada y una ruta interna recargada directamente, por ejemplo
   `http://IP_PUBLICA/actividades/2`.

La regla `try_files $uri $uri/ /index.html` hace que Nginx entregue
`index.html` cuando la URL no corresponde a un archivo real, de modo que React
Router pueda interpretar la ruta.
