import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
              <h3>Franqoise Usados</h3>
            </Link>
          </div>
          <div className="Categories">
              <Link to='/category/Indumentaria' className="Option">Indumentaria</Link>
              <Link to='/category/Celulares' className="Option">Celulares</Link>
              <Link to='/category/Zapatillas' className="Option">Zapatillas</Link>
          </div>
          <CartWidget />
      </nav>
  )
}

export default Navbar