// Autores.js

import React, {useState, useEffect} from 'react';
import { getAutores } from '../services/api';


const Autores = () => {

  const [loading, setLoading] = useState(true); 
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    
    setLoading(true);

    getAutores()
      .then(response => {
        setAutores(response.data);
        setLoading(false);  
      })
      .catch(error => {
        console.error(error);
      })

  }, [])

  return (

    <div>
      <h1>Autores</h1>

      {loading ? ( 
        <div>Cargando...</div>  
      ) : (
        <ul>
          {autores.map(autor => (
             <li key={autor.id}>{autor.nombre}</li>
          ))}
        </ul>
      )}

    </div>

  )

}

export default Autores;
