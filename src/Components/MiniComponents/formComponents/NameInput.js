import React from "react";
import Form from 'react-bootstrap/Form';

const NameInput = ({setName, setAlert})=>{
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Nome cliente</Form.Label>
          <Form.Control
           type="text" 
           placeholder="Inserisci nome" 
           onChange={(e)=>setName(e)}
           onFocus={(e)=>setAlert(e)}
           required
           />
        </Form.Group>
    )
}
export default NameInput