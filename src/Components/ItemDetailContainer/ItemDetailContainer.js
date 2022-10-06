import { useState, useEffect } from 'react'
import {  getProductById } from '../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId] )

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle de producto</h1>
            {/* <ItemDetail {...product}/> */}
            <div>{product?.name}</div>
        </div>
    )
}

export default ItemDetailContainer