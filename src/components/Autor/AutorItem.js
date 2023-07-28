// src/components/Autor/AutorItem.js

import React from 'react';

const AutorItem = ({ autor }) => {
  return (
    <div>
      <h3>{autor.nombre}</h3>
      <p>Edad: {autor.edad}</p>
      <p>Nacionalidad: {autor.nacionalidad}</p>
    </div>
  );
}

export default AutorItem;
