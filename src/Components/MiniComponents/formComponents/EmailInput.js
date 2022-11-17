import React, {useEffect} from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validateEmail } from '../../../functions/submitUser';

export const EmailInput = ({setEmail, email}) => {
 const [value, setValue]= useState()
 const [validated, setValidated] = useState(false);
 useEffect(()=>{
     editClass(value)
     console.log(value)
 },[value])

 const editClass = (value)=>{
  setValidated(validateEmail(value))
 }

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control 
         type="email" 
         placeholder="Inserisci email"
         onChange={e=>{
          setValue(e.target?.value)
          value && setEmail(e.target?.value)
         }} 
         value={email}
         required
         className={validated===false? "is-invalid" : "is-valid"}
         />
      </Form.Group>
  )
}

export default EmailInput