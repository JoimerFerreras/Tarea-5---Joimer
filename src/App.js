import {useState, useEffect} from 'react';
import {BaseDatos} from './ConfiguracionFirebase';
import NuevoContacto from './componentes/NuevoContacto';
import Contacto from './componentes/Contacto'
import './App.css';

function App() {
  const [contactos, setContactos] = useState([]);

  function AgregarNuevoContacto(contacto){

    //setContactos(contactos.slice().push(contacto));
    MostrarContactos();

  }

  function MostrarContactos(){
    const ListaContactos = [];
    BaseDatos.collection('ContactoBD').get()
    .then(Resultado => {
      Resultado.forEach(contacto =>{
        ListaContactos.push(contacto.data());
      })
      setContactos(ListaContactos);

    }).catch(error => console.log(error));
  }

  useEffect(MostrarContactos, []);

  return (
    <div className="App">
      <header className="App-header">
        <NuevoContacto AgregarNuevoContacto = {AgregarNuevoContacto} />
        {
          contactos && contactos.length >0 && contactos.slice().reverse().map((contacto,i)=>{
            const {nombre,apellido,telefono} = contacto;
            return (<Contacto key={i} nombre={nombre} apellido = {apellido} telefono = {telefono}/>)
          })
        }
      </header>
    </div>
  );
}

export default App;