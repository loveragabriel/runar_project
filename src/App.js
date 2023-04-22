import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Catalogo } from './pages/Catalogo';
import { Categories } from './pages/Categories';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
import NavBar from './components/NavBar';
import { ContextCartProvider } from './context/cartContext';

function App() {
  
  return (
    <BrowserRouter basename='/runar'>
      <ContextCartProvider >
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Catalogo />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/ItemDetailContainer/:idItem' element={<ItemDetailContainer />} />
          <Route path='/Categories/:itemCategory' element={<Categories/>} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </ContextCartProvider>
    </BrowserRouter>
  );
}

export default App;
