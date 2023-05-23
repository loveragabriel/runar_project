import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Catalogo } from './pages/Catalogo';
import { Categories } from './pages/Categories';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Error404 } from './components/Error404';
import NavBar from './components/NavBar';
import { ContextCartProvider } from './context/cartContext';
import Shopping from './pages/Shopping';
import { Home } from './pages/Home';
import { Authentication } from './pages/Authentication';

function App() {
  
  return (
    <>
    <Authentication></Authentication>
    
    <BrowserRouter basename='/'>

      <ContextCartProvider >

        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Catalogo' element={<Catalogo />} />
          <Route path='/ItemDetailContainer/:idItem' element={<ItemDetailContainer />} />
          <Route path='/Categories/:itemCategory' element={<Categories/>} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/Shopping' element={<Shopping/>}/>
        </Routes>
      </ContextCartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
