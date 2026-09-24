import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Bienvenida from "./components/Bienvenida";
import TarjetaActividad from "./components/TarjetaActividad";
import PiePagina from "./components/PiePagina";

function App() {
  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <Bienvenida />
        <section id="actividades">
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <TarjetaActividad />
            </div>
          </div>
        </section>
      </main>
      <PiePagina />
    </>
  );
}

export default App;
