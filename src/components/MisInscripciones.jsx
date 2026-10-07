function MisInscripciones({ inscripciones, onEliminar }) {
  if (inscripciones.length === 0) {
    return (
      <p className="text-body-secondary">
        Todavía no te has inscrito en ninguna actividad.
      </p>
    );
  }

  return (
    <ul className="list-group">
      {inscripciones.map((actividad) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center gap-3"
          key={actividad.id}
        >
          <span>
            {actividad.nombre}{" "}
            <small className="text-body-secondary">({actividad.categoria})</small>
          </span>
          <button
            className="btn btn-outline-danger flex-shrink-0"
            onClick={() => onEliminar(actividad.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MisInscripciones;
