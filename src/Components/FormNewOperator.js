import React, { useEffect } from "react";
import {validateEmail, validatePassword, validateNomeAttivita} from "../functions/submitUser"
import { useState } from "react";
import {Operatore} from "../Model/Operatore"
import { useSelector } from "react-redux";


const FormNewOperator = ()=>{
 const [name, setName]=useState()
 const [email, setEmail]=useState()
 const [password, setPassword]=useState()
 const [alert, setAlert]=useState()
 const [newOperator, setNewOperator]=useState()
 const {nome}=useSelector(state=>state)

 const sendUser = ()=>{
  validateEmail(email) && validateNomeAttivita(name) && validatePassword(password)?
   setNewOperator(new Operatore(name, email, password, 1))
   : 
   setAlert("dati non validi")
  console.log(newOperator,alert)
  }

 const checkUser= ()=>{
    if (name){
        validateNomeAttivita(name)? setAlert("") : setAlert("nome non valido")
    }
    if(email){
        validateEmail(email)? setAlert("") : setAlert("email non valida")
    }
    if(password){
        validatePassword(password)? setAlert("") : setAlert("password non valida")
    }
 }
 useEffect(()=>{
    checkUser()
 },[name, email, password])

    return(
        <>
        <label>{nome} stai registrando un nuovo operatore</label>
        <form onSubmit={(e)=>{
            e.preventDefault()
            sendUser()
        }}>
            <h2>Registrazione nuovo operatore</h2>
            <label htmlFor="nome">Nome</label>
            <input 
             type="text" 
             id="nome" 
             onChange={(e)=>setName(e.target.value)}
             required
             />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="password">Password </label>
            <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
            
             <p style={{color:"red", fontSize:"1rem"}}>{alert}</p> 
            
            <input type="submit" id="submit" />
        </form>
        <p>
          {newOperator? "Nuovo Utente operatore aggiunto":""}
          {newOperator?.nome}
          {newOperator?.id}
        </p>
        </>

    )
}

export default FormNewOperator