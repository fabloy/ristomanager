import React, { useEffect } from "react";
import {setNome, setEmail, setPassword, setId, setLogged} from "../Store/StoreUser"
import {useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import {validateEmail, validatePassword, validateNomeAttivita} from "../functions/submitUser"
import { checkNome, checkEmail, checkPassword } from "../functions/checkValue";
import { useState } from "react"
import { Attivita } from "../Model/Attivita"


const FormRegistrazione = ()=>{
//state locali:
 const [attivitaNome, setAttivitaNome]= useState()
 const [attivitaEmail, setAttivitaEmail]= useState()
 const [attivitaPassword, setAttivitaPassword]= useState()
 const [alert, setAlert]=useState("")

//state Store:
 const dispatch=useDispatch()
 const {id, admin}=useSelector(state=>state)

 const submitUser=(e)=>{
    e.preventDefault()
    if(validateEmail(attivitaEmail) && validateNomeAttivita(attivitaNome) && validatePassword(attivitaPassword)){
     dispatch(setId())
     let attivitaInserita = new Attivita(attivitaNome, attivitaEmail, attivitaPassword, id)
     dispatch(setNome(attivitaInserita.nome))
     dispatch(setEmail(attivitaInserita.email))
     dispatch(setPassword(attivitaInserita.password))
     dispatch(setLogged(true))
     console.log(attivitaInserita)
     return
    }
    alert("dati non validi")
 }

const checkUser= ()=>{
       if(attivitaNome, attivitaEmail, attivitaPassword ){
        if(validateEmail(attivitaEmail) && validateNomeAttivita(attivitaNome) && validatePassword(attivitaPassword)){
         setAlert("Dati Corretti") 
        } 
 }
 }

 useEffect(()=>{
    checkUser()
 },[attivitaNome, attivitaEmail, attivitaPassword])

 return(
    <form onSubmit={(e)=>submitUser(e)}>
        <h2>Registrazione</h2>
        <h4>
         {admin ? "Amministratore" : "Operatore"}
        </h4>
     <label>
      nome
     </label>
        <input
        required 
         type="text" 
         value={attivitaNome} 
         onChange={(e)=>{
            setAttivitaNome(e.target?.value)
            setAlert(checkNome(e.target?.value))
            }}>
         </input>
        
        <label>
            email
        </label>
        <input 
         required
         type="email"
         value={attivitaEmail}
         onChange={(e)=>{
            setAttivitaEmail(e.target?.value)
            setAlert(checkEmail(e.target?.value))
         }}
         >
         </input>
        <label>
         password
        </label>
        <input 
        required
        type="password"
        value={attivitaPassword}
        onChange={(e)=>{
           setAttivitaPassword(e.target?.value)
           setAlert(checkPassword(e.target?.value))
         }}
        >
        </input>
        <div>
         <span>
             {alert}
          </span>
        </div>
        <input type="submit" >
        </input>
    </form>
    )
}

export default FormRegistrazione