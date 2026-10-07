import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DetalleActividad({ actividades, onInscribir }) {
  const { id } = useParams();
  const actividad = actividades.find((item) => item.id === Number(id));

  if (!actividad) {
    return (
      <Container as="main" className="py-4">
        <h1>Actividad no encontrada</h1>
        <p>La actividad solicitada no existe.</p>
        <Link to="/actividades">Volver a actividades</Link>
      </Container>
    );
  }

  const textoPrecio =
    actividad.precio === 0
      ? "Gratis"
      : `$${actividad.precio.toLocaleString("es-CL")}`;

  return (
    <Container as="main" className="py-4">
      <Row>
        <Col xs={12} lg={8}>
          <h1>{actividad.nombre}</h1>
          <p className="badge text-bg-secondary">{actividad.categoria}</p>
          <p>{actividad.descripcion}</p>
          <p className="fw-bold mb-1">{textoPrecio}</p>
          <p>Cupos: {actividad.cupos}</p>
          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-primary"
              onClick={() => onInscribir(actividad)}
              disabled={actividad.cupos === 0}
            >
              {actividad.cupos === 0 ? "Sin cupos" : "Inscribirme"}
            </button>
            <Link className="btn btn-outline-secondary" to="/actividades">
              Volver
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleActividad;
