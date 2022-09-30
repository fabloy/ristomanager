import React from "react";
import Form from 'react-bootstrap/Form';

const DateInput = ({description, setDate})=>{
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{description}</Form.Label>
              <Form.Control 
               type="date" 
               placeholder={description} 
               onChange={(e)=>setDate(e)}
               required
               />
            </Form.Group>
    )
}
export default DateInput