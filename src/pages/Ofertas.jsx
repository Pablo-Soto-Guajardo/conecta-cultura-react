import Cartelera from "./Cartelera";

const PRECIO_MAXIMO_OFERTA = 5000;

function Ofertas({ actividades, onInscribir }) {
  const ofertas = actividades.filter(
    (actividad) => actividad.precio <= PRECIO_MAXIMO_OFERTA
  );

  return (
    <main className="container py-4">
      <h1>Ofertas</h1>
      <p>
        Actividades gratuitas o con un valor de hasta $
        {PRECIO_MAXIMO_OFERTA.toLocaleString("es-CL")}.
      </p>
      {ofertas.length === 0 ? (
        <p>Por ahora no hay ofertas disponibles.</p>
      ) : (
        <Cartelera actividades={ofertas} onInscribir={onInscribir} />
      )}
    </main>
  );
}

export default Ofertas;
