import './ItemListContainer.css'
import { useState, useEffect, useContext } from 'react'
// import { getProduct, getProductsByCategory, getProductById } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { NotificationContext } from '../../Notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { setNotification } = useContext(NotificationContext)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
                ? query(collection (db, 'products'), where('category', '==', categoryId))
                : collection (db, 'products')
        

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data ()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            setNotification('error', 'No se pueden obtener los productos')
        })
        .finally(() =>{
            setLoading(false)
        })
       // const asyncFunction = categoryId ? getProductsByCategory : getProduct
        
       // asyncFunction(categoryId).then(response => {
       //     setProducts(response)
       // }).catch(error => {
       //     console.log(error)
       // }).finally(() => {
       //     setLoading(false)
       // })  
    }, [categoryId])



    if(loading && true) {
        return <h1>Cargando productos...</h1>
    }


    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <h2>Productos</h2>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            { products.length > 0 && <ItemList products={products} /> }
        </div>
    )
}

export default ItemListContainer