import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Autores from './pages/Autores';
import Libros from './pages/Libros';  
import Prestamos from './pages/Prestamos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Página de Inicio</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/prestamos" element={<Prestamos />} />
      </Routes>

      <div>
        <h1>Bienvenido a la app!</h1> 
      </div>

    </BrowserRouter>
  );
}

export default App;


