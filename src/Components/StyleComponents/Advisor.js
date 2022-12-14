import React, { useEffect, useState } from "react";
import AdvisorCSS from "./Advisor.module.css"
import displayAlert from "../../functions/displayAlert"
import hideAlert from "../../functions/hideAlert";



import Alert from 'react-bootstrap/Alert';
const Advisor = ({title, text, hide, showAdv})=>{
 const [adv, setAdv] = useState(showAdv) 
    useEffect(()=>{
       setAdv(showAdv)
     }, [showAdv])

    return(
     <Alert 
     className={`${AdvisorCSS.adv} ${!adv ? `${AdvisorCSS.notView}` : `${AdvisorCSS.adv}`}` }
      variant={"info"}
      >
      <p>
       {text}
      </p>
      
        <button
         className={AdvisorCSS.close}
         onClick={()=>{ 
            // setAdv(!showAdv)
            hide(!showAdv)
        }
        }
         > x </button>
      
      
     </Alert>
    )
}
export default Advisor


       
 