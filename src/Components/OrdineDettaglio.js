import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrdineDettaglio = ()=>{
 const [ordine, setOrdine] = useState()
 const params = useParams()
 const {ordiniDaEvadere} = useSelector(state=>state)
 
 useEffect(()=>{
     let ordToShow = ordiniDaEvadere.filter(el=>el.ordine.toString()===params.id)
     setOrdine(...ordToShow)
     console.log(ordToShow, ordine)
    },[params.id])

    return(
        <div>
            {console.log(ordine)}
            <h2>Ordine n: {ordine?.ordine}</h2>
            <p>
             {`Cliente: ${ordine?.nome}`}
             <br></br>
             {`Descrizione Prodotto: ${ordine?.descrizione}`}
             {`telefono: ${ordine?.telefono}`}
            </p>
        </div>
    )
}
export default OrdineDettaglio