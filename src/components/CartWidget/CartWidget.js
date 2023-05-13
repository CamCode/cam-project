import cart from './assets/cart.svg';
import Figure from 'react-bootstrap/Figure';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const {totalQuantity} = useContext(CartContext)
    return (
        <div className="ml-4 flow-root lg:ml-6">
            <Link to='/cart' className='block group -m-2 flex items-center p-2 '>
                <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"/>
                <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-gray-800">{totalQuantity}</span>
                <span className="sr-only">items in cart, view bag</span>
            </Link>
        </div>
    )
}

export default CartWidget;