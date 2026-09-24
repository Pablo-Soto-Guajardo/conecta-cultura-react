function TarjetaActividad({ actividad, onInscribir }) {
  const textoPrecio =
    actividad.precio === 0
      ? "Gratis"
      : `$${actividad.precio.toLocaleString("es-CL")}`;

  return (
    <article className="card h-100">
      <div className="card-body d-flex flex-column">
        <h2 className="h5">{actividad.nombre}</h2>
        <p className="badge text-bg-secondary align-self-start">
          {actividad.categoria}
        </p>
        <p className="card-text">{actividad.descripcion}</p>
        <p className="fw-bold mb-1">{textoPrecio}</p>
        <p>Cupos: {actividad.cupos}</p>
        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onInscribir(actividad)}
          disabled={actividad.cupos === 0}
        >
          {actividad.cupos === 0 ? "Sin cupos" : "Inscribirme"}
        </button>
      </div>
    </article>
  );
}

export default TarjetaActividad;
