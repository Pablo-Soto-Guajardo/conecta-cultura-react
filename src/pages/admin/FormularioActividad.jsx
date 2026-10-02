import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { categorias } from "../../data/actividades";

const inicial = {
  nombre: "",
  categoria: "",
  descripcion: "",
  precio: "",
  cupos: ""
};

function FormularioActividad({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio";
    if (!datos.categoria) nuevosErrores.categoria = "Selecciona categoría";
    if (!datos.descripcion.trim()) {
      nuevosErrores.descripcion = "Descripción obligatoria";
    }

    if (datos.precio === "") {
      nuevosErrores.precio = "Precio obligatorio (escribe 0 si es gratis)";
    } else if (Number(datos.precio) < 0) {
      nuevosErrores.precio = "No puede ser negativo";
    }

    if (datos.cupos === "") {
      nuevosErrores.cupos = "Cupos obligatorio";
    } else if (Number(datos.cupos) < 0) {
      nuevosErrores.cupos = "No puede ser negativo";
    } else if (!Number.isInteger(Number(datos.cupos))) {
      nuevosErrores.cupos = "Debe ser un número entero";
    }

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onGuardar({
      ...datos,
      nombre: datos.nombre.trim(),
      descripcion: datos.descripcion.trim(),
      precio: Number(datos.precio),
      cupos: Number(datos.cupos)
    });
    setDatos(inicial);
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="nombre"
          value={datos.nombre}
          onChange={cambiar}
          isInvalid={Boolean(errores.nombre)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.nombre}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          name="categoria"
          value={datos.categoria}
          onChange={cambiar}
          isInvalid={Boolean(errores.categoria)}
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((nombre) => (
            <option key={nombre}>{nombre}</option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errores.categoria}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="descripcion"
          value={datos.descripcion}
          onChange={cambiar}
          isInvalid={Boolean(errores.descripcion)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.descripcion}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="row">
        <Form.Group className="mb-3 col-12 col-md-6" controlId="precio">
          <Form.Label>Precio (pesos)</Form.Label>
          <Form.Control
            type="number"
            min="0"
            name="precio"
            value={datos.precio}
            onChange={cambiar}
            isInvalid={Boolean(errores.precio)}
          />
          <Form.Control.Feedback type="invalid">
            {errores.precio}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6" controlId="cupos">
          <Form.Label>Cupos</Form.Label>
          <Form.Control
            type="number"
            min="0"
            name="cupos"
            value={datos.cupos}
            onChange={cambiar}
            isInvalid={Boolean(errores.cupos)}
          />
          <Form.Control.Feedback type="invalid">
            {errores.cupos}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Button type="submit">Guardar</Button>
    </Form>
  );
}

export default FormularioActividad;
