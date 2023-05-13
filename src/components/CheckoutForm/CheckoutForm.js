import React from 'react'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleConfirm}>
            <div>
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email} 
                onChange={({target}) => setEmail(target.value)}
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                </div>
                <div className="mt-2">
                <input id="name" name="name" type="name" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name} 
                onChange={({target}) => setName(target.value)}
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label for="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                </div>
                <div className="mt-2">
                <input id="phone" name="phone" type="phone" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={phone}
                onChange={({target}) => setPhone(target.value)} />
                </div>
            </div>

            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear Orden</button>
            </div>
            </form>
        </div>
    )
}

export default CheckoutForm