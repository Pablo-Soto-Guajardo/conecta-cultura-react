import { useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormularioActividad from "./FormularioActividad";

function AdminActividades({ actividades, onAgregar, onEliminar }) {
  const [mensaje, setMensaje] = useState("");

  function guardar(actividad) {
    onAgregar(actividad);
    setMensaje(`Actividad "${actividad.nombre}" guardada.`);
  }

  function eliminar(actividad) {
    onEliminar(actividad.id);
    setMensaje(`Actividad "${actividad.nombre}" eliminada.`);
  }

  return (
    <main className="container py-4">
      <h1>Administración de actividades</h1>

      {mensaje && (
        <Alert variant="success" onClose={() => setMensaje("")} dismissible>
          {mensaje}
        </Alert>
      )}

      <section className="mb-5">
        <h2 className="h4 mb-3">Nueva actividad</h2>
        <FormularioActividad onGuardar={guardar} />
      </section>

      <section>
        <h2 className="h4 mb-3">Actividades registradas ({actividades.length})</h2>
        {actividades.length === 0 ? (
          <p>No hay actividades registradas.</p>
        ) : (
          <Table responsive striped className="align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Cupos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((actividad) => (
                <tr key={actividad.id}>
                  <td>{actividad.id}</td>
                  <td>
                    <Link to={`/actividades/${actividad.id}`}>
                      {actividad.nombre}
                    </Link>
                  </td>
                  <td>{actividad.categoria}</td>
                  <td>
                    {actividad.precio === 0
                      ? "Gratis"
                      : `$${actividad.precio.toLocaleString("es-CL")}`}
                  </td>
                  <td>{actividad.cupos}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => eliminar(actividad)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </main>
  );
}

export default AdminActividades;
