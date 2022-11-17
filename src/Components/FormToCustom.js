import React from "react";
import Form from 'react-bootstrap/Form';
import ButtonInput from "./MiniComponents/formComponents/ButtonInput";

const FormToCustom = ({input, submitFun, triggerName})=>{
    return(
        <Form
        onSubmit={(e)=>{
            console.log("ONsubmit",e)
            submitFun(e)
            }}>
         {input}
         <ButtonInput
         triggerName={triggerName}
         />
        </Form>
    )
       
}
export default FormToCustom