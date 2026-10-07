import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categorias } from "../data/actividades";

function Categorias({ actividades }) {
  return (
    <Container as="main" className="py-4">
      <h1>Categorías</h1>
      <Row>
        <Col xs={12} lg={8}>
          <div className="list-group">
            {categorias.map((nombre) => {
              const cantidad = actividades.filter(
                (actividad) => actividad.categoria === nombre
              ).length;

              return (
                <Link
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center gap-3"
                  key={nombre}
                  to={`/categorias/${encodeURIComponent(nombre)}`}
                >
                  {nombre}
                  <span className="badge text-bg-primary rounded-pill">
                    {cantidad}
                    <span className="visually-hidden"> actividades</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Categorias;
