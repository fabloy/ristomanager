import React from "react";
import Form from 'react-bootstrap/Form';

const TelephoneInput = ({setTel})=>{
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control 
           type="number" 
           placeholder="inserisci numero di telefono" 
           onChange={(e)=>setTel(e)}
           required
           />
        </Form.Group>
    )
}
export default TelephoneInput