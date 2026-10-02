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

## Funcionalidades

- Navegación SPA con React Router (`Routes`, `Route`, `Link`, `NavLink`, `useParams`).
- Cartelera generada desde un arreglo de actividades mediante `map` y props.
- Filtro por categoría con `useState`.
- Inscripciones sin duplicados y con opción de eliminar.
- Formulario controlado con validación y mensajes de error junto a cada campo.
- Crear y eliminar actividades desde la vista de administración.
- Persistencia de actividades e inscripciones en `localStorage` con `useEffect`.
