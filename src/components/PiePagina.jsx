function PiePagina() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white mt-auto">
      <div className="container">
        <p className="mb-0">&copy; {anioActual} Conecta Cultura</p>
      </div>
    </footer>
  );
}

export default PiePagina;
