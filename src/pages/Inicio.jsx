import { Link } from "react-router-dom";
import Bienvenida from "../components/Bienvenida";

function Inicio() {
  return (
    <main className="container py-4">
      <Bienvenida />
      <div className="d-flex flex-wrap gap-2">
        <Link className="btn btn-primary" to="/actividades">
          Ver actividades
        </Link>
        <Link className="btn btn-outline-primary" to="/categorias">
          Explorar categorías
        </Link>
        <Link className="btn btn-outline-primary" to="/ofertas">
          Ver ofertas
        </Link>
      </div>
    </main>
  );
}

export default Inicio;
