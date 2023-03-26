import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productos } from './pages/Productos';
import { Novedades } from './pages/Novedades';
import { Ofertas } from './pages/Ofertas';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
import NavBar from './components/NavBar';
import { CategoryContainer } from './components/CategoryContainer';
function App() {
  return (
    <BrowserRouter basename='/runar'>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Productos' element={<Productos/>} />
      <Route path='/Novedades' element={<Novedades/>} />
      <Route path='/Ofertas' element={<Ofertas/>} />
      <Route path='/ItemDetailContainer/:indexItem' element={<ItemDetailContainer/>} />
      <Route path='/CategoryContainer/:itemCategory' element={<CategoryContainer/>} />

      <Route path='/*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
