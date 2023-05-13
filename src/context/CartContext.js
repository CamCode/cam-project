import { createContext, useState } from "react"

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log('cart',cart)

    const addItem = (item, quantity)=> {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (productId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (productId)=> {
        return cart.some(prod => prod.id === productId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}