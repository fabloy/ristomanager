import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormToCustom from "../FormToCustom"
import { useSelector } from 'react-redux';
import {setNome, setEmail, setPassword, setId, setLogged} from "../../Store/StoreUser"
import {useDispatch } from "react-redux";
import {validateEmail, validatePassword, validateNomeAttivita} from "../../functions/submitUser"
import { checkNome, checkEmail, checkPassword } from "../../functions/checkValue";
import { Attivita } from "../../Model/Attivita"

import NameInput from "../MiniComponents/formComponents/NameInput"
import EmailInput from "../MiniComponents/formComponents/EmailInput"
import PasswordInput from '../MiniComponents/formComponents/Password';


function FormBootstrap(){

 //state locali:
 const [attivitaNome, setAttivitaNome]= useState()
 const [attivitaEmail, setAttivitaEmail]= useState()
 const [attivitaPassword, setAttivitaPassword]= useState()
 const [alert, setAlert]=useState("Compila tutti i campi")

 //state Store:
 const {id, admin}=useSelector(state=>state)
 const dispatch = useDispatch()

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
    setAlert("dati non validi")
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
  
  return (
    <FormToCustom
      triggerName="Salva"
      submitFun={(e)=>submitUser(e)}
      input={[
        <NameInput
         setName={(e)=>{
          setAttivitaNome(e.target.value)
          setAlert(checkNome(e.target.value))}}
        />,
        <EmailInput
         setEmail={(e)=>{
          setAttivitaEmail(e)
          setAlert(checkEmail(e))
        }}
        />,
        <PasswordInput
         setPassword={(e)=>{
          setAttivitaPassword(e)
          setAlert(checkPassword(e))
         }}
        />,
        <p>{alert}</p>
        ]
        }
    />
  );
}

export default FormBootstrap;