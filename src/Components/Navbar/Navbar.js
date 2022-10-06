import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <Link to='/'>
                    <h1>Franqoise</h1>
                </Link>               
                    <h3>Seleccionados Premium</h3>
            </div>
            <div className='Categories'>
                <Link to='/category/Indumentaria' className='Option'>Ropa</Link>
                <Link to='/category/Celulares' className='Option'>Celulares</Link>
                <Link to='/category/Zapatillas' className='Option'>Zapatillas</Link>

            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar