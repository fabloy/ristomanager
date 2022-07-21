import React from "react";
import AdvisorCSS from "./Advisor.module.css"

const Advisor = ({title, text})=>{
    return(
        <article className={AdvisorCSS.adv}>
            <h4>
             {title}
            </h4>
            <p>
            {text}
            </p>
        </article>
    )
}
export default Advisor