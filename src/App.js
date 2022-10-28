import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/CheckOut/CheckOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider } from './Context/CartContext'
import { NotificationProvider } from './Notification/Notification';

function App() {
 
  return (
    <div className="App"> 
       <NotificationProvider>
          <CartContextProvider>
          <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
       </NotificationProvider>
    </div>
  );
}

export default App;