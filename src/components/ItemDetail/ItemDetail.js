import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, title, thumbnail, price, description, stock}) => {
    return(
        <div key={id} className="bg-slate-100 mx-auto max-w-2xl px-4 pb-8 pt-10 mb-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-6 lg:px-6 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <img
                src={thumbnail}
                alt={title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
            </div>
            <p class="text-3xl tracking-tight text-gray-900">${price}</p>
            <div>
            <h3 class="sr-only">Descripción</h3>

            <div class="space-y-6">
                <p class="text-base text-gray-900">{description}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Stock disponible: {stock}</p>
            </div>
        </div>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
     </div>
    )
}

export default ItemDetail