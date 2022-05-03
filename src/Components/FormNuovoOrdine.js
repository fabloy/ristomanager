
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrdiniDaEvadere } from "../Store/StoreUser";
import { Ordine } from "../Model/Ordine";
import { cleanInput } from "../functions/cleanInput";

const FormNuovoOrdine=({nome, telefono, dataConsegna, descrizione, ingredientiPrincipali})=>{
    const dispatch = useDispatch()
    const {idOrd}=useSelector(state=>state)
    //state locali:
    const [name, setName]=useState()
    const [orderNumber, setOrderNumber]=useState(idOrd)
    const [date, setDate]=useState()
    const [description, setDescription]=useState()
    const [ingredients, setIngredients]=useState()
    const [tel, setTel]=useState()
  
    let ordineGenerato
    const invioNuovoOrdine = (e)=>{
        e.preventDefault()
        //qua bisognerà inserire i controlli sui campi inseriti
        setOrderNumber(orderNumber+1)
         ordineGenerato = new Ordine(name, tel, description, ingredients, date, orderNumber)
        dispatch(setOrdiniDaEvadere({
            'nome':ordineGenerato.nome, 
            'ordine':ordineGenerato.id,
            'telefono':ordineGenerato.telefono,
            'data':ordineGenerato.data,
            'descrizione':ordineGenerato.descrizione,
            'ingredienti principali':ordineGenerato.ingredienti,
        }))
        cleanInput()
    }

    return(
        <form onSubmit={(e)=>invioNuovoOrdine(e)}>
            
            <label style={{display: orderNumber?"block":"none"}}>
             {orderNumber.toString()}
            </label>
            <div style={{display: nome?"block":"none"}}>
             <label>{nome}</label>
             <input 
              required 
              type="text"
              onChange={(e)=>setName(e.target.value)}
              >
             </input>
            </div>

            <div style={{display: telefono?"block":"none"}}>
             <label>{telefono}</label>
             <input 
              required 
              type="tel"
              onChange={(e)=>setTel(e.target.value)}
              >
             </input>
            </div>
            
            <label>{descrizione}</label>
            <textarea 
             style={{display: descrizione?"block":"none"}}
             required
             onChange={(e)=>{setDescription(e.target.value)}}
             >
             </textarea>

            <label>{ingredientiPrincipali}</label>
            <textarea
             style={{display: ingredientiPrincipali?"block":"none"}}
             required
             onChange={(e)=>{setIngredients(e.target.value)}}>
             </textarea>

            <label>{dataConsegna}</label>
            <input 
             style={{display: dataConsegna?"block":"none"}}
             required
             type="date"
             onChange={(e)=>{setDate(e.target.value)}}
             >
             </input>

            <input type="submit"></input>
        </form>
    )
}

export default FormNuovoOrdine