import React from "react";
import Form from 'react-bootstrap/Form';

const NumeberInput = ({description, setValue})=>{
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{description}</Form.Label>
        <Form.Control 
         type="number" 
         placeholder={`inserisci ${description}`}
         onChange={(e)=>setValue(e.target.value)}
         required
         />
      </Form.Group>
    )
}
export default NumeberInput