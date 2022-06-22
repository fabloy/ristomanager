import React, { useEffect } from "react";
import displayAlert from "../functions/displayAlert";

const MsgAlert = ({newOperator, msg})=>{
    useEffect(()=>{
        displayAlert()
    },[])

    return(
     <aside id="alertMsg">
      <span>
      {newOperator? msg :""}
      </span>
      <p>
       {newOperator?.nome}
      </p>
     </aside>
    )
}

export default MsgAlert