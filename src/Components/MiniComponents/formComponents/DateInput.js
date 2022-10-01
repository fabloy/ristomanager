import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

const DateInput = ({description, setDate, ext})=>{
    const [validated, setValidated] = useState(false);
    // const handleSubmit = (event) => {
    //   const form = event?.currentTarget;
    //   if (form.checkValidity() === false) {
    //     setValidated(false)
    //     console.log( event?.currentTarget.checkValidity())
    //   }
    //   setValidated(true);
    // };
    const editClass = ()=>{
     ext===false? setValidated(false) : setValidated(true)
    }
    
    return(
        <Form.Group 
         className="mb-3" 
         controlId="formBasicEmail"
         validated={validated}
         >
              <Form.Label>{description}</Form.Label>
              <Form.Control 
              type="invalid"
               type="date" 
               placeholder={description}
               className={validated===false? "is-invalid" : "is-valid"} 
               onChange={(e)=>{
                setDate(e)
                editClass(e)
            }}
               required
               />
            </Form.Group>
    )
}
export default DateInput