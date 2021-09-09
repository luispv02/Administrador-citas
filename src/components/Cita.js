import React from 'react';


const Cita = ({cita,eliminarCita}) => {

    return ( 
        <div className="contenedorCitas">
            <p><span>Mascota:</span> {cita.mascota}</p>
            <p><span>Propietario:</span> {cita.propietario}</p>
            <p><span>Fecha:</span> {cita.fecha}</p>
            <p><span>Hora:</span> {cita.hora}</p>
            <p><span>Sintomas:</span> {cita.sintomas}</p>

            <button
                className="btn btn-danger w-100 mt-3"
                onClick={() => eliminarCita(cita.id)}
            >Eliminar</button>
        </div>
     );
}
 
export default Cita;