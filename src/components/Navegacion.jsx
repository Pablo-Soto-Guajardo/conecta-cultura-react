import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/actividades", texto: "Actividades" },
  { to: "/categorias", texto: "Categorías" },
  { to: "/ofertas", texto: "Ofertas" },
  { to: "/inscripciones", texto: "Mis inscripciones" },
  { to: "/admin/actividades", texto: "Administración" }
];

function Navegacion() {
  const [abierto, setAbierto] = useState(false);

  function cerrarMenu() {
    setAbierto(false);
  }

  return (
    <Navbar
      expand="lg"
      bg="light"
      data-bs-theme="light"
      expanded={abierto}
      onToggle={setAbierto}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={cerrarMenu}>
          Conecta Cultura
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="menu-principal"
          label="Abrir o cerrar el menú"
        />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            {enlaces.map((enlace) => (
              <NavLink
                className="nav-link"
                key={enlace.to}
                to={enlace.to}
                onClick={cerrarMenu}
              >
                {enlace.texto}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
