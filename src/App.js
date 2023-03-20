import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    correo: ""
  });

  const [busqueda, setBusqueda] = useState("");

  const agregarColaborador = (e) => {
    e.preventDefault();

    if( nuevoColaborador.nombre === "" || nuevoColaborador.correo === "" ){
        return alert("Faltan campos por llenar")
    }

    setNuevoColaborador({
      id: Date.now(),
      nombre: nuevoColaborador.nombre,
      correo: nuevoColaborador.correo
    });

    setColaboradores([...colaboradores, nuevoColaborador]);
  }

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if(colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase() )){
      return true;
    }

    return false;
  });


  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <input
        className="form-control me-4 ms-4 my-3 bg-light"
        placeholder="Buscar un colaborador"
        onChange={(e) => setBusqueda(e.target.value)}
        value={busqueda}
        />
      </nav>

      <div className="container">
      <form action="" onSubmit={agregarColaborador}>
        <br></br>
        <h3>Agregar un colaborador</h3>
      

        <div className="mt-3">
          <label>Nombre del colaborador</label>
          <input
            className="form-control me-2 my-3 bg-light"
            type="text"
            onChange={(e) => setNuevoColaborador({
              id: Date.now(),
              nombre: e.target.value,
              correo: nuevoColaborador.correo
            })}
            value={nuevoColaborador.nombre}
          />
        </div>

        <div className="mt-3">
          <label>Correo del colaborador</label>
          <input
            className="form-control me-2 my-3 bg-light"
            type="email"
            onChange={(e) => setNuevoColaborador({
              id: Date.now(),
              nombre: nuevoColaborador.nombre,
              correo: e.target.value
            })}
            value={nuevoColaborador.correo}
          />
        </div>

        <button
          className="mt-3 btn btn-primary"
          type="submit"
        >
          Agregar colaborador
        </button>
      </form>

      <div className="mt-3">
        <h3>
          Listado de colaboradores
        </h3>

        <ul>
          {colaboradoresFiltrados.map( ({id, nombre, correo}) => <li key={id}>{nombre} | {correo}</li>)}
        </ul>
      </div>
      </div>
      
    </div>
  );
}

export default App;
