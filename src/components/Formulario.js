import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [informacion, guardarInformacion] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [alerta, guardarAlerta] = useState(false)

    const leerInput = e => {
        guardarInformacion({
            ...informacion,
            [e.target.name] : e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = informacion

    const agregarCita = e => {
        e.preventDefault()

        //Validar Formulario
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||  hora.trim() === '' || sintomas.trim() === '' ){
            guardarAlerta(true)
            return;
        }
        guardarAlerta(false)

        //Agregar id
        informacion.id = uuidv4();

        //Agregar la cita
        crearCita(informacion)

        // Vaciar Formulario
        guardarInformacion({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return ( 
        <div>
            <h2>Crear Cita</h2>

            {alerta ? <p className="error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={agregarCita}
            >
                <div>
                    <label>Nombre Mascota</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la Mascota"
                        name="mascota"
                        onChange={leerInput}
                        value={mascota}
                    />
                </div>

                <div>
                    <label>Nombre Propietario</label>
                    <input 
                        type="text"
                        placeholder="Nombre del Propietario"
                        name="propietario"
                        onChange={leerInput}
                        value={propietario}
                    />
                </div>

                <div>
                    <label>Fecha</label>
                    <input 
                        type="date"
                        name="fecha"
                        onChange={leerInput}
                        value={fecha}
                    />
                </div>

                <div>
                    <label>Hora</label>
                    <input 
                        type="time"
                        name="hora"
                        onChange={leerInput}
                        value={hora}
                    />
                </div>

                <div>
                    <label>Sintomas</label>
                    <textarea
                        placeholder="Ingresar los Sintomas"
                        name="sintomas"
                        onChange={leerInput}
                        value={sintomas}
                    >
                    </textarea>
                </div>


                <input
                    type="submit"
                    value="Agregar Cita"
                ></input>
            </form>
        </div>
     );
}
 
export default Formulario;