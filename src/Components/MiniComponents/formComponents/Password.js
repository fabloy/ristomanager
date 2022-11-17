import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { validatePassword } from '../../../functions/submitUser';


const PasswordInput = ({setPassword}) => {
 const [value, setValue]= useState()
 const [validated, setValidated] = useState(false);

 useEffect(()=>{
     editClass(value)
 },[value])

 const editClass = (value)=>{
  setValidated(validatePassword(value))
 }

  return (
    <Form.Group 
    className="mb-3" 
    controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
         type="password" 
         placeholder="Password"
         onChange={(e)=>{
          setValue(e.target?.value)
          value && setPassword(e.target.value)
         }}
         className={validated===false? "is-invalid" : "is-valid"}
         />
      </Form.Group>
  )
}

export default PasswordInput