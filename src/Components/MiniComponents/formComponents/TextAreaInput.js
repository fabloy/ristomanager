import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const TextAreaComponent = ({description, changeDescription})=>{

    return(
      <FloatingLabel controlId="floatingTextarea2" label={description}>
        <Form.Control
          as="textarea"
          placeholder={description}
          style={{ height: '100px' }}
          onChange={(e)=>changeDescription(e)}
          required
        />
      </FloatingLabel>
  
    )
}
export default TextAreaComponent