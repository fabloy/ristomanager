import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const NameInput = ({setName, setAlert, msg})=>{
    const [validated, setValidated] = useState(false);
    const [value, setValue]=useState("")
    useEffect(()=>{
        editClass(value)
    },[value])
    const editClass = (value)=>{
       let firstCheck = value.length>=3? true : false
       let secondCheck =  isNaN(value)? true : false
       firstCheck&&secondCheck? setValidated(true) : setValidated(false)
       }
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Nome </Form.Label>
          <br></br>
           <i style={{"font-size":".8rem"}}>
             {msg}
            </i>
          <Form.Control
           type="text" 
           placeholder="Inserisci nome" 
           onChange={(e)=>{setName(e)
            setValue(e.target.value)
           }}
           onFocus={(e)=>{
            setAlert(e)
        }}
           className={validated===false? "is-invalid" : "is-valid"}
           required
           />
        </Form.Group>
    )
}
export default NameInput