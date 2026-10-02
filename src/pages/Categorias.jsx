import { Link } from "react-router-dom";
import { categorias } from "../data/actividades";

function Categorias({ actividades }) {
  return (
    <main className="container py-4">
      <h1>Categorías</h1>
      <div className="list-group">
        {categorias.map((nombre) => {
          const cantidad = actividades.filter(
            (actividad) => actividad.categoria === nombre
          ).length;

          return (
            <Link
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              key={nombre}
              to={`/categorias/${encodeURIComponent(nombre)}`}
            >
              {nombre}
              <span className="badge text-bg-primary rounded-pill">
                {cantidad}
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Categorias;
