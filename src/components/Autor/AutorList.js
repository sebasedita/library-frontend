// AutorList.js

import { useState, useEffect } from 'react';
import { getAutores } from '../../services/api';

const AutorList = () => {
    const [autores, setAutores] = useState([]);
  
    useEffect(() => {
      // Llamada a la API para obtener la lista de autores
      getAutores()
        .then(response => {
          setAutores(response.data);
        })
        .catch(error => {
          console.error('Error al obtener la lista de autores:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Autores</h1>
        <ul>
          {autores.map(autor => (
            <li key={autor.id}>{autor.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AutorList;