import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import {setNome, setEmail, setPassword, setId, setLogged} from "../../Store/StoreUser"
import {useDispatch } from "react-redux";
import {validateEmail, validatePassword, validateNomeAttivita} from "../../functions/submitUser"
import { checkNome, checkEmail, checkPassword } from "../../functions/checkValue";
import { Attivita } from "../../Model/Attivita"


function BasicExample(){

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
 console.log(alert)
},[attivitaNome, attivitaEmail, attivitaPassword])
  
  return (
    <Form onSubmit={(e)=>{
      e.preventDefault()
      submitUser(e)
    }}>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          Nome
        </Form.Label>
        <Form.Control 
         type="text" 
         placeholder="Nome" 
         onChange={e=>{
          setAlert(checkNome(e.target?.value))
          setAttivitaNome(e.target?.value)
        }}
         value={attivitaNome}
         required
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control 
         type="email" 
         placeholder="Inserisci email"
         onChange={e=>{
          setAlert(checkEmail(e.target?.value))
          setAttivitaEmail(e.target?.value)
        }} 
         value={attivitaEmail}
         required
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label 
        >
          Password
          </Form.Label>
        <Form.Control 
         type="password" 
         placeholder="Password" 
         required
         onChange={e=>{
          setAlert(checkPassword(e.target?.value))
          setAttivitaPassword(e.target.value)
        }}
         value={attivitaPassword}
         />
      </Form.Group>
      <div>
         <span>
             {alert}
          </span>
      </div>
      <Button variant="primary" type="submit">
        Salva
      </Button>
    </Form>
  );
}

export default BasicExample;