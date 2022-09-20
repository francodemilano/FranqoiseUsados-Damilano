import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';

function App() {
  return (
    <div id="1" className="App">
      {/* <header className="App-header "> */}
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <p className="Titulo" style={{ backgroundColor: 'blue'}} onClick={() => console.log('click')}>BIENVENIDOS</p>
        <button>boton</button>
        <input />
      {/* </header> */}
    </div>
  );
}

export default App;