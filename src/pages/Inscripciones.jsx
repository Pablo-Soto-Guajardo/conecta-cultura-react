import { Col, Container, Row } from "react-bootstrap";
import MisInscripciones from "../components/MisInscripciones";

function Inscripciones({ inscripciones, onEliminar }) {
  return (
    <Container as="main" className="py-4">
      <h1>Mis inscripciones ({inscripciones.length})</h1>
      <Row>
        <Col xs={12} lg={8}>
          <MisInscripciones
            inscripciones={inscripciones}
            onEliminar={onEliminar}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Inscripciones;
