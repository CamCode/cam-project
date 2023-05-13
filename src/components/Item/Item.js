
import { Link } from 'react-router-dom'

const Item = ({id, title, images, price, stock}) => {

    return(
        <div key={id} className="group relative">
         <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
                src={images}
                alt={title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">Stock disponible: {stock}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">Precio: {price}</p>
        </div>
        <Link to={`/product/${id}`} className="absolute option ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">Ver Detalle</Link>
      </div>
    )
}

export default Item