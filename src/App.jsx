import PiePagina from "./components/PiePagina";
import Navegacion from "./components/Navegacion";
import Bienvenida from "./components/Bienvenida";
import Cabecera from "./components/Cabecera";
import TarjetaActividad from "./components/TarjetaActividad";

function App() {
  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <Bienvenida />
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <TarjetaActividad />
          </div>
        </div>
      </main>
      <PiePagina/>
    </>
  );
}

export default App;
