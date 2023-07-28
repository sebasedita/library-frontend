// api.js

import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const getAutores = () => {
    return axios.get(`${API_URL}/api/autores`); 
}
export const postAutor = async (autor) => {
    return axios.post(`${API_URL}/api/autores`, autor);
}

export const getLibros = () => {
    return axios.get(`${API_URL}/api/libros`);
} 

export const getPrestamos = () => {
    return axios.get(`${API_URL}/api/prestamos`);
}

export const getAllEditoriales = () => {
    return axios.get(`${API_URL}/api/editoriales`);
}

export const getAllUsuarios = () => {
    return axios.get(`${API_URL}/api/usuarios`);
}