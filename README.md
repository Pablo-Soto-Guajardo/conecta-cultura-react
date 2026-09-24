# Conecta Cultura (React + Vite)

Cartelera de actividades culturales construida con React, Vite y React Bootstrap
para la asignatura Desarrollo FullStack II (EA2).

**Autor:** Pablo Esteban Soto Aranda

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Estructura

| Carpeta / archivo | Responsabilidad |
| --- | --- |
| `src/components` | Piezas reutilizables (Cabecera, Navegacion, TarjetaActividad, MisInscripciones, PiePagina) |
| `src/pages` | Vistas completas (Cartelera) |
| `src/data` | Datos simulados (actividades.js) |
| `src/App.jsx` | Componente principal: estado, filtro, inscripciones y persistencia |

## Funcionalidades

- Cartelera generada desde un arreglo de actividades mediante `map` y props.
- Filtro por categoría con `useState`.
- Inscripciones sin duplicados y con opción de eliminar.
- Persistencia de inscripciones en `localStorage` con `useEffect`.
