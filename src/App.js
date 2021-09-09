import React, {useState} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  


  const [citas, guardarCitas] = useState([])

  const crearCita = cita => {
    guardarCitas([...citas, cita])
  }

  const eliminarCita = id => {
    const citasActualizadas = citas.filter(cita => cita.id !== id);
    guardarCitas(citasActualizadas)
  }

  return (
    <div
      className="container"
    >
      <h1>Administrador de Pacientes</h1>
        <div className="row mt-5" >
            <div className="col" >
              <Formulario 
                crearCita={crearCita}
              />
            </div>


            <div className="col">

            {citas.length === 0 ? <h2>No hay Citas</h2> : <h2>Administrar Citas</h2>}

                {citas.map( cita => (
                  <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
