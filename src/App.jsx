import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Bienvenida from "./components/Bienvenida";
import PiePagina from "./components/PiePagina";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";

function App() {
  function inscribirTemporal(actividad) {
    console.log("Actividad seleccionada:", actividad.nombre);
  }

  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <Bienvenida />
        <section id="actividades">
          <h2 className="h4 mb-3">Cartelera</h2>
          <Cartelera
            actividades={actividades}
            onInscribir={inscribirTemporal}
          />
        </section>
      </main>
      <PiePagina />
    </>
  );
}

export default App;
