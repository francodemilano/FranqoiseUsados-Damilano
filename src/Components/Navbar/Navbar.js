import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
              <h3>Franqoise Usados</h3>
            </Link>
          </div>
          <div className="Categories">
              <NavLink to='/category/Indumentaria' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Indumentaria</NavLink>
              <NavLink to='/category/Celulares' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
              <NavLink to='/category/Zapatillas' className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar