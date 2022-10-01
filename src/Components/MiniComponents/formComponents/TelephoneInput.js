import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const TelephoneInput = ({setTel,msg})=>{
  const [validated, setValidated] = useState(false);
  const editClass = (e)=>{
      e.target.value.length!==10? setValidated(false) : setValidated(true)
     }
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Numero di telefono</Form.Label>
           <br></br>
           <i style={{"font-size":".8rem"}}>
             {msg}
            </i>
          <Form.Control 
           type="number" 
           placeholder="inserisci numero di telefono" 
           onChange={(e)=>{
            setTel(e)
            editClass(e)}
          }
           required
           className={validated===false? "is-invalid" : "is-valid"}
           />
        </Form.Group>
    )
}
export default TelephoneInput