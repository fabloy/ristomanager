import React, { useEffect } from "react";
import {validateEmail, validatePassword, validateNomeAttivita} from "../functions/submitUser"
import MsgAlert from "./MsgAlert";
import { useState } from "react";
import {Operatore} from "../Model/Operatore"
import { useSelector } from "react-redux";
import { checkNome, checkEmail, checkPassword } from "../functions/checkValue";
import { useParams } from "react-router-dom";
import Home from "./Home";


const FormNewOperator = ()=>{
 let params = useParams()
 const [view, setView]=useState(false)
 const [name, setName]=useState()
 const [email, setEmail]=useState()
 const [password, setPassword]=useState()
 const [alert, setAlert]=useState()
 const [newOperator, setNewOperator]=useState()
 const {nome}=useSelector(state=>state)

 const sendUser = ()=>{
  if(validateEmail(email) && validateNomeAttivita(name) && validatePassword(password)){
    setNewOperator(new Operatore(name, email, password, 1))
    setAlert("") 
    setName("")
    setEmail("")
    setPassword("")
    setTimeout(setParams,2000)
  }else{
   setAlert("dati non validi")
  }
  }

 const checkUser= ()=>{
   if(name,email, password ){
        if(validateEmail(email) && validateNomeAttivita(name) && validatePassword(password)){
         setAlert("Dati Corretti") 
        } 
 }
 }

 const setParams = ()=>{
  params.created="true"
  setView(!view)
 }
 
 useEffect(()=>{
  checkUser()
 },[name, email, password, view])

    return params.created==="false" ? <>
        <label>
         {nome} 
          stai registrando un nuovo operatore
        </label>
        <form onSubmit={(e)=>{
            e.preventDefault()
            sendUser()
            // setTimeout(setParams, 1500)
            }}>
            <h2>Registrazione nuovo operatore</h2>
            <label htmlFor="nome">Nome</label>
            <input 
             required
             type="text" 
             id="nome" 
             onChange={(e)=>{
                 setName(e.target.value)
                 setAlert(checkNome(e.target?.value))
                }}
             
             />
           <label htmlFor="email">Email</label>
            <input 
             type="text" 
             id="email" 
             required
             onChange={(e)=>{
              setEmail(e.target.value)
              setAlert(checkEmail(e.target?.value))
            }
            }/>

            <label htmlFor="password">Password </label>
            <input 
             type="password" 
             id="password" 
             required
             onChange={(e)=>{
                setPassword(e.target.value)
                setAlert(checkPassword(e.target?.value))
                }}/>
            
             <p style={{color:"red", fontSize:"1rem"}}>{alert}</p> 
            <input type="submit" id="submit">
            </input>
        </form>
        </>
        :
        <>
         <MsgAlert newOperator={newOperator} />
         <Home/>
        </>
        
   
}

export default FormNewOperator