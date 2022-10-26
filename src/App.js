import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider } from './Context/CartContext'


function App() {
 
  return (
    <div className="App"> 

          <CartContextProvider>
          <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
     
    </div>
  );
}

export default App;