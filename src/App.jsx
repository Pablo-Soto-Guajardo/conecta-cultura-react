import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import MisInscripciones from "./components/MisInscripciones";
import PiePagina from "./components/PiePagina";
import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";
import { actividades } from "./data/actividades";

function App() {
  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  }, [inscripciones]);

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
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/actividades"
          element={
            <Actividades actividades={actividades} onInscribir={inscribir} />
          }
        />
        <Route
          path="/actividades/:id"
          element={
            <DetalleActividad actividades={actividades} onInscribir={inscribir} />
          }
        />
        <Route path="/admin/actividades" element={<AdminActividades />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <section className="container pb-4">
        <h2 className="h4 mb-3">Mis inscripciones ({inscripciones.length})</h2>
        <MisInscripciones
          inscripciones={inscripciones}
          onEliminar={eliminarInscripcion}
        />
      </section>
      <PiePagina />
    </>
  );
}

export default App;
