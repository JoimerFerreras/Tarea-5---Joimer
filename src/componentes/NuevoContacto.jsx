import React, {useRef} from 'react';
import{BaseDatos} from '../ConfiguracionFirebase.js';
import './Contacto';

function NuevoContacto({AgregarNuevoContacto}){
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);

    function AgregarContacto(){
        const contacto = {
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            telefono: telefonoRef.current.value,
        }

        BaseDatos.collection('ContactoBD').add(contacto);

        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        telefonoRef.current.value = "";
        AgregarNuevoContacto(contacto);

    }

    return(
        <div className = "contenedor">
            <div className = "fila">
                <div className = "columna">
                    Nombre
                </div>

                <div className = "columna">
                    <input type = "text" className = "texto" ref = {nombreRef}/>
                </div>
            </div>

            <div className = "fila">
                <div className = "columna">
                    Apellido 
                </div>

                <div className = "columna">
                    <input type = "text" className = "texto" ref = {apellidoRef}/>
                </div>
            </div>

            <div className = "fila">
                <div className = "columna">
                    Teléfono 
                </div>

                <div className = "columna">
                    <input type = "text" className = "texto" ref = {telefonoRef}/>
                </div>
            </div>

            <div className = "fila">
                <div className ="columna">
                    <button className = "boton" onClick={AgregarContacto}>Agregar contacto</button>
                 </div>
            </div>
        </div>
    )
}

export default NuevoContacto;