import { useState } from "react";
import Cartelera from "./Cartelera";
import { categorias } from "../data/actividades";

function Actividades({ actividades, onInscribir }) {
  const [categoria, setCategoria] = useState("Todas");

  const visibles =
    categoria === "Todas"
      ? actividades
      : actividades.filter((actividad) => actividad.categoria === categoria);

  return (
    <main className="container py-4">
      <h1>Actividades</h1>
      <label htmlFor="filtro-categoria" className="form-label">
        Filtrar por categoría
      </label>
      <select
        id="filtro-categoria"
        className="form-select mb-4"
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option>Todas</option>
        {categorias.map((nombre) => (
          <option key={nombre}>{nombre}</option>
        ))}
      </select>
      <Cartelera actividades={visibles} onInscribir={onInscribir} />
    </main>
  );
}

export default Actividades;
