import React from "react";
import Form from 'react-bootstrap/Form';
import ButtonInput from "./MiniComponents/formComponents/ButtonInput";
import FormToCustomCSS from "./StyleComponents/FormToCustom.module.css"

const FormToCustom = ({input, submitFun, triggerName})=>{
    return(
        <Form
        className={FormToCustomCSS.formCustom}
        onSubmit={(e)=>{
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