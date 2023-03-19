import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Novedades } from './pages/Novedades';
import { Ofertas } from './pages/Ofertas';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/Novedades' element={<Novedades/>} />
      <Route path='/Ofertas' element={<Ofertas/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
