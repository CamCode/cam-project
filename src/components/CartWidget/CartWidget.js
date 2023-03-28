import cart from './assets/cart.svg';
import Figure from 'react-bootstrap/Figure';

const CartWidget = () =>{
    return (
        <div>
            <Figure.Image
            width={40}
            height={40}
            src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;