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
          className="list-group-item d-flex justify-content-between align-items-center"
          key={actividad.id}
        >
          <span>
            {actividad.nombre}{" "}
            <small className="text-body-secondary">({actividad.categoria})</small>
          </span>
          <button
            className="btn btn-outline-danger btn-sm"
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
