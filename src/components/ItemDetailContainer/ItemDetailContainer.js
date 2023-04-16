import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductbyId } from "../../asyncMock";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()

    useEffect(()=> {
        getProductbyId(Number(productId))
            .then(response =>  {
                console.log(response)
                setProduct(response)
            .catch(error => {
                console.log(error)
            })
        })
    },[productId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer