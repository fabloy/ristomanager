import React from "react";

const TextElement = ({primaryText, secondaryText})=>{
    return (
        <section>
         <p style={{"margin":"0px", "padding":"0px"}}>
            {secondaryText}
         </p>    
         <h6 style={{"margin":"0px", "padding":"0px"}}>
            {primaryText}
         </h6>
        </section>
    )
}
export default TextElement