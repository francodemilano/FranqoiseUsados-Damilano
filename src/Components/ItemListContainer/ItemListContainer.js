import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProduct, getProductsByCategory, getProductById } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Este es un titulo')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProduct
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Cambio el titulo')
        }, 4000)
    }, [])

    if(loading && true) {
        return <h1>Cargando productos...</h1>
    }


    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>{title}</h2>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            { products.length > 0 && <ItemList products={products} /> }
        </div>
    )
}

export default ItemListContainer