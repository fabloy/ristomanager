import React from "react";

const BtnCustom = ({background, color, padding, textCustom})=>{
   return(
    <button 
     style={
        {
            "background":background, 
            "color":color, 
            "padding":padding
        }
     }
    >
     {textCustom}
    </button>
   )
}
export default BtnCustom