import React from 'react'
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

//import logo from './logo.svg';

// import AvatarJsx from './Components/AvatarJsx';

function App() {
  return (
    <div id="1" className="App">

      {/* <header className="App-header "> */}
{/*         <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <p className="Titulo" style={{ backgroundColor: 'blue'}} onClick={() => console.log('click')}>BIENVENIDOS</p>
        <button>boton</button>
        <input /> */}
      {/* </header> */}
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;