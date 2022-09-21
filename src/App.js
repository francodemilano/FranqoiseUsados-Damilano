import React from 'react'
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div id="1" className="App">


      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;