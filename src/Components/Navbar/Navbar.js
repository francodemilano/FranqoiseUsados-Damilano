import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>Usados Seleccionados</h1>
            </div>
            <div>
                <button>Ropa</button>
                <button>Calzado</button>
                <button>Celulares</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar