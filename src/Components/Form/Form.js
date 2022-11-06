import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import React, { useState } from 'react'
import './Form.css'
import swal from 'sweetalert'

export default function Form ({createOrder}) {
    const {cart} = useContext(CartContext)
    const [dataForm, setDataForm] = useState({
        name: "",
        surname: "",
        phone: "",
        email: ""
      });

    const {name, phone, email} = useState("");

    function onInputChange(evt) {
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }
    
    function onSubmit(evt) {
        evt.preventDefault();
        swal (`Sus datos ingresados son: Nombre ${dataForm.name} ${dataForm.surname}, y su email es ${dataForm.email}`);
        if(name === '' || email === '' || phone === ''){
            swal('Todos los campos son requeridos');
            return;
        }
        if(cart.length === 0){
            swal('No hay productos agregados al carrito');
            return;
        }

        const buyer = ({
            name: dataForm.name,
            surname: dataForm.surname,
            email: dataForm.email,
            phone: dataForm.phone
        })
        createOrder(buyer);
    }

    return (

    <form className="form-register" onSubmit={onSubmit}>
    <h4>Confirmar compra</h4>
    <div>
    <input className="controls"
        value={dataForm.name}
        onChange ={onInputChange}
        name="name"
        type="text"
        placeholder="Ingrese su Nombre"
        required 
    />
    </div>
    <div>
    <input className="controls" 
        value={dataForm.surname}
        onChange={onInputChange}
        name="surname"
        type="text"
        placeholder="Ingrese su Apellido"
        required
    />
    </div>
    <div>
    <input className="controls"
        value={dataForm.phone}
        onChange={onInputChange}
        name="phone"
        type="text"
        placeholder="Ingrese su Télefono"
        required
    />
    </div>
    <div>
    <input className="controls"
        value={dataForm.email}
        onChange={onInputChange}
        name="email"
        type="text"
        placeholder="Ingrese su Correo"
        required
    />
    </div>
    <div>
    <button className="botons" 
    type="submit" 
    onClick={onSubmit}
    >
    Enviar orden</button>        
    </div>
    </form >
    )
}