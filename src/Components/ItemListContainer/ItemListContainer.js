import { useState, useEffect, useContext } from 'react' 
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { NotificationContext } from '../../Notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

const { setNotification } = useContext(NotificationContext)

    const { categoryId } = useParams()
    
    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId  
        ? query(collection(db, 'products'), where('category', '==', categoryId) )
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })
        .catch(error => {
            setNotification('error', 'No pudimos acceder a los productos')
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])


    if(loading && true) {        
        return <h1>Loading...</h1>
    }



    return (
        <div className="ItemListContainer" onClick={() => console.log('hice click en el ItemListContainer')}>
            <h2>{`${greeting} ${categoryId || ''}`}</h2>
                { products.length > 0 && <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer