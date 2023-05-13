import React from 'react'

const CartItem = ({id, price, title, quantity}) => {
  return (
    <div className='bg-slate-100 mx-auto max-w-2xl px-4 pb-8 pt-10 mb-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-6 lg:px-6 lg:pb-24 lg:pt-16'>
        <ul role="list" className="w-120 divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{title}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{quantity}</p>
                    </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">${price}</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default CartItem