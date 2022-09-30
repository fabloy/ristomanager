import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonInput = ({triggerName})=>{
    return(
        <Button variant="primary" type="submit">
          {triggerName}
         </Button>
    )
}
export default ButtonInput