import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
        <Link to='/'>
          <h3>Franqoise Usados Seleccionados</h3>
        </Link>
        <div className="Categories">
            <NavLink to='/category/Indumentaria' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
            <NavLink to='/category/Celulares' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
            <NavLink to='/category/Zapatillas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar