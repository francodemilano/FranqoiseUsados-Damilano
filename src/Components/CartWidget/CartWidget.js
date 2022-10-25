import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return(
        <Link to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            10
        </Link>
    );
}

export default CartWidget