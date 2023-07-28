// src/components/Autor/AutorForm.js

import React, { useState } from 'react';
import { postAutor } from '../services/api';

const AutorForm = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoAutor = { nombre, edad, nacionalidad };
    postAutor(nuevoAutor)
      .then(response => {
        console.log('Autor creado:', response.data);
        // Aquí podrías actualizar la lista de autores mostrada en AutorList
      })
      .catch(error => {
        console.error('Error al crear el autor:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nuevo Autor</h3>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Edad:</label>
        <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </div>
      <div>
        <label>Nacionalidad:</label>
        <input type="text" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} />
      </div>
      <button type="submit">Crear Autor</button>
    </form>
  );
}

export default AutorForm;
