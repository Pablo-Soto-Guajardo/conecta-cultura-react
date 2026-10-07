import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Cartelera from "./Cartelera";
import { categorias } from "../data/actividades";

function CategoriaDetalle({ actividades, onInscribir }) {
  const { nombre } = useParams();

  if (!categorias.includes(nombre)) {
    return (
      <Container as="main" className="py-4">
        <h1>Categoría no encontrada</h1>
        <p>La categoría solicitada no existe.</p>
        <Link to="/categorias">Volver a categorías</Link>
      </Container>
    );
  }

  const deLaCategoria = actividades.filter(
    (actividad) => actividad.categoria === nombre
  );

  return (
    <Container as="main" className="py-4">
      <h1>{nombre}</h1>
      {deLaCategoria.length === 0 ? (
        <p>Todavía no hay actividades en esta categoría.</p>
      ) : (
        <Cartelera actividades={deLaCategoria} onInscribir={onInscribir} />
      )}
      <Link className="d-inline-block mt-4" to="/categorias">
        Volver a categorías
      </Link>
    </Container>
  );
}

export default CategoriaDetalle;
