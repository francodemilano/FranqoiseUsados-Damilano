import { Form } from '../Form/Form'
import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  
  const { cart, total, clearCart } = useContext(CartContext)
 
  const createOrder = async (buyer) => {
    setLoading(true)
    try {
      const objOrder = {
        buyer, /*{
          name: "",
          phone: "",
          email: "",
          emailValidate: "",
        },*/
        items: cart,
        total
      }
      console.log(objOrder)
  //    const collectionRef = collection( db, 'orders')

  //    addDoc(collectionRef, objOrder)

      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')

      const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))) 
      const { docs } = productsFirestore

      const batch = writeBatch(db)
      const outOfStock = []

      docs.forEach(doc => {
        //▼base de datos actualizada
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        //▼lo que el usuario agregó, del cart.  
        const productCartUser = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productCartUser?.quantity

        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity})
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc})
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit()    
        
        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)

        console.log(`El id de su orden es: ${orderAdded.id}`)
        clearCart()
      } else {
        console.log('El producto seleccionado está fuera de stock')
      }      
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false)
    }  
  }

  if(loading){
    return <h1>►►► Su orden se está generando ►►►</h1>
  }

  return (
    <>
      <h1>Check</h1> 
      <Form createOrder={createOrder}/>
    </>
  )

}

export default Checkout