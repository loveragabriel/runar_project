import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Catalogo } from './pages/Catalogo';
import { Accesorios } from './pages/Accesorios';
import { Zapatillas } from './pages/Zapatillas';
import { Indumentaria } from './pages/Indumentaria';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
import NavBar from './components/NavBar';
import { CategoryContainer } from './components/CategoryContainer';
import { createContext } from 'react';

const cartContext = createContext({ countCart: 20 });

function App() {
  const CartContextProvider = cartContext.Provider
  const cart = []
  return (
    <BrowserRouter basename='/runar'>
      <CartContextProvider value={{ cart: cart }}>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Catalogo />} />
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/Accesorios' element={<Accesorios />} />
          <Route path='/Zapatillas' element={<Zapatillas />} />
          <Route path='/Indumentaria' element={<Indumentaria />} />
          <Route path='/ItemDetailContainer/:idItem' element={<ItemDetailContainer />} />
          <Route path='/CategoryContainer/:itemCategory' element={<CategoryContainer />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
export { cartContext }; 
