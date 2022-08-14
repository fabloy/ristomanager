import React, { useEffect } from "react";
import AdvisorCSS from "./Advisor.module.css"
import displayAlert from "../../functions/displayAlert"
import hideAlert from "../../functions/hideAlert";

import Alert from 'react-bootstrap/Alert';
const Advisor = ({title, text, hide, showAdv})=>{

    useEffect(()=>{
       showAdv? displayAlert(showAdv) : hideAlert()
    }, [showAdv])

    return(
     <Alert 
     className={`${AdvisorCSS.adv} alertInfo`}
      variant={"info"}
      >
      <section 
       className={AdvisorCSS.wrapPrimary}
       >
        <div>
        {title}
        </div>
        <div 
         className={AdvisorCSS.close}
         onClick={()=>{
            hide()
}}
         >
            x
        </div>
      </section>
      <p>
       {text}
      </p>
     </Alert>
    )
}
export default Advisor


       
 