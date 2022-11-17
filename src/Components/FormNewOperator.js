import React, { useEffect } from "react";
import {validateEmail, validatePassword, validateNomeAttivita} from "../functions/submitUser"

import { useState } from "react";
import {Operatore} from "../Model/Operatore"
import { useSelector } from "react-redux";
import { checkNome, checkEmail, checkPassword } from "../functions/checkValue";
import { useParams } from "react-router-dom";
import FormToCustom from "./FormToCustom";
import NameInput from "./MiniComponents/formComponents/NameInput";
import EmailInput from "./MiniComponents/formComponents/EmailInput";
import PasswordInput from "./MiniComponents/formComponents/Password";
import AlertElement from "./MiniComponents/AlertElement";
import { useDispatch } from "react-redux";
import { setAggiungiOperatore } from "../Store/StoreUser";
import { cleanInput } from "../functions/cleanInput";



const FormNewOperator = ()=>{
 let params = useParams()
 let dispatch = useDispatch()
 const [view, setView]=useState(false)
 const [name, setName]=useState()
 const [email, setEmail]=useState()
 const [password, setPassword]=useState()
 const [alert, setAlert]=useState()
 const {nome}=useSelector(state=>state)
 const {operatoriAggiunti}=useSelector(state=>state)

 const sendUser = ()=>{
  if(validateEmail(email) && validateNomeAttivita(name) && validatePassword(password)){
    let operator = new Operatore(name, email, password, 1)
    setAlert("") 
    setName("")
    setEmail("")
    setPassword("")
    dispatch(setAggiungiOperatore(operator))
    setView(true)
    setTimeout(setParams,3000)
    cleanInput()
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
  setView(false)
 }
 
 useEffect(()=>{
  checkUser()
  view && window.scroll(0, -document.body.offsetHeight)
 },[name, email, password, view])

    return <>
     {view? <AlertElement
      variantSelected="success"
      text={`Nuovo operatore "${operatoriAggiunti[operatoriAggiunti.length-1]?.nome}" aggiunto correttamente`}>
      </AlertElement>
      :
      <></>
     }
       <label>
         {nome} 
          stai registrando un nuovo operatore
        </label>
     
    
      <FormToCustom
      triggerName="Invia ordine"
      submitFun={(e)=>{
       e.preventDefault()
       sendUser(e)
     }}
      input={[
             <NameInput 
              setName={(e)=>{
               setName(e.target.value)
               setAlert(checkNome(e.target.value))
             }}
             />,
            <EmailInput
            setEmail={(e)=>{
             setEmail(e)
             setAlert(checkEmail(e))
           }}
           email={email}
            />,
            <PasswordInput
             setPassword={(e)=>{
               setPassword(e)
               setAlert(checkPassword(e))
             }}
            />,
            <p>{alert}</p>
            ]
           }
     >
     </FormToCustom>

     </>
     
}

export default FormNewOperator