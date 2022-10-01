import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const NumeberInput = ({description, setValue})=>{
    const [validated, setValidated] = useState(false);
    const editClass = (value)=>{
    value<=0? setValidated(false) : setValidated(true)
    }
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{description}</Form.Label>
        <Form.Control 
         type="number" 
         placeholder={`inserisci ${description}`}
         onChange={(e)=>{
            setValue(e.target.value)
            editClass(e.target.value)
         }
        }
         required
         className={validated===false? "is-invalid" : "is-valid"}
         />
      </Form.Group>
    )
}
export default NumeberInput