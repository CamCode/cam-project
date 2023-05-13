import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductbyId } from "../../asyncMock";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=> {
        setLoading(true)

        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
            .then(response => {
                console.log(response)
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })

    },[productId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer