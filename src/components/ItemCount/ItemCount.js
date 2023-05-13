import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

return(
    <div className="Counter grid justify-items-center ">
        <div className="btn-group flex" role="group" aria-label="Basic example">
            <button type="button" className="w-8 rounded-l-lg bg-indigo-600 font-medium text-white hover:bg-indigo-700 focus:outline-none" onClick={decrement}>-</button>
            <h4 className="Number mx-4">{quantity}</h4>
            <button type="button" className="w-8 rounded-r-lg bg-indigo-600 font-medium text-white hover:bg-indigo-700 focus:outline-none" onClick={increment}>+</button>
        </div>
        <button
        onClick={()=> onAdd(quantity)} disabled={!stock}
        className="mt-10 flex items-center w-64 justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
        Agregar al carrito
        </button>
    </div>
)}

export default ItemCount