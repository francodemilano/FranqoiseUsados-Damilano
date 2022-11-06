import Form from '../Form/Form'
import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/firebase'
import React from 'react'
import swal from 'sweetalert'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  
  const { cart, total, clearCart } = useContext(CartContext)
 
  const createOrder = async (buyer) => {
    setLoading(true)
    try {
      const objOrder = {
        buyer,
        items: cart,
        total
      };

      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')

      const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))) 
      const { docs } = productsFirestore

      const batch = writeBatch(db)
      const outOfStock = []

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
         
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
        swal (`Orden generada! Su nro de orden es ${orderAdded.id}`)
        swal (`En breve nos pondremos en contacto para corrdinar medios de pago y metodo de envío`)

        console.log(`El id de su orden es: ${orderAdded.id}`)
        clearCart()
      } else {
        swal ('error', `el producto esta temporalmente sin stock`)
        console.log('El producto seleccionado está fuera de stock')
      }      
    } catch (error) {
      swal('error', 'Ha ocurrido un error!')
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