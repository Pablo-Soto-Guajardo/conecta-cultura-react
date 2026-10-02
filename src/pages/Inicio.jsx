import { Link } from "react-router-dom";
import Bienvenida from "../components/Bienvenida";

function Inicio() {
  return (
    <main className="container py-4">
      <Bienvenida />
      <Link className="btn btn-primary" to="/actividades">
        Ver actividades
      </Link>
    </main>
  );
}

export default Inicio;
