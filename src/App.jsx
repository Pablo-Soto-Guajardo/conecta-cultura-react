import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Bienvenida from "./components/Bienvenida";
import MisInscripciones from "./components/MisInscripciones";
import PiePagina from "./components/PiePagina";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";

const categorias = ["Todas", "Música", "Artes visuales", "Teatro", "Danza", "Literatura"];

function App() {
  const [categoria, setCategoria] = useState("Todas");
  const [inscripciones, setInscripciones] = useState([]);

  const visibles =
    categoria === "Todas"
      ? actividades
      : actividades.filter((actividad) => actividad.categoria === categoria);

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) return;
    setInscripciones([...inscripciones, actividad]);
  }

  function eliminarInscripcion(id) {
    setInscripciones(inscripciones.filter((item) => item.id !== id));
  }

  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <Bienvenida />

        <section id="actividades" className="mb-5">
          <h2 className="h4 mb-3">Cartelera</h2>
          <label htmlFor="filtro-categoria" className="form-label">
            Filtrar por categoría
          </label>
          <select
            id="filtro-categoria"
            className="form-select mb-4"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            {categorias.map((nombre) => (
              <option key={nombre}>{nombre}</option>
            ))}
          </select>
          <Cartelera actividades={visibles} onInscribir={inscribir} />
        </section>

        <section id="inscripciones">
          <h2 className="h4 mb-3">Mis inscripciones ({inscripciones.length})</h2>
          <MisInscripciones
            inscripciones={inscripciones}
            onEliminar={eliminarInscripcion}
          />
        </section>
      </main>
      <PiePagina />
    </>
  );
}

export default App;
