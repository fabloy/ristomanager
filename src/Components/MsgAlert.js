import React, { useEffect } from "react";
import displayAlert from "../functions/displayAlert";

const MsgAlert = ({newOperator})=>{
    useEffect(()=>{
        displayAlert()
    },[])

    return(
     <aside id="alertMsg">
      <span>
      {newOperator? "Nuovo Utente operatore aggiunto: ":""}
      </span>
      <p>
       {newOperator?.nome}
      </p>
     </aside>
    )
}

export default MsgAlert