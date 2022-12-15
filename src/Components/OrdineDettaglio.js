import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrdineDettaglioCSS from "../Components/StyleComponents/OrdineDettaglio.module.css"
import EditOrder from "./EditOrder";
// import { showOrderDetail } from "../functions/ShowOderDetail";

const OrdineDettaglio = ()=>{
 const [ordine, setOrdine] = useState()
 const [opacity, setOpacity]=useState("0")
 const params = useParams()
 const {ordiniDaEvadere} = useSelector(state=>state)
 const [showEdit, setShowEdit] = useState(false)


 
 useEffect(()=>{
     let ordToShow = ordiniDaEvadere.filter(el=>el.ordine.toString()===params.id)
     setOrdine(...ordToShow)
    },[params.id])

    return(
        <main>
          {!showEdit ? <section className={OrdineDettaglioCSS.wrapper}>
            <div>
            <h2>Ordine n: {ordine?.ordine}</h2>
            <p>
             Cliente: <b>{ordine?.nomeCliente}</b>
             <br></br>
             Prodotto: {<b>{ordine?.nomeProdotto}</b>}<br></br>
             Descrizione Prodotto: {<b>{ordine?.descrizione}</b>}<br></br>
             Telefono: <b>{ordine?.telefono}</b>
             <br></br>
             Data consegna: <b>{ordine?.data}</b>
            </p>
            <button
             onClick={()=>setShowEdit(true)}
             >
                Modifica
            </button>
            </div>
            
        </section>
        :
        <EditOrder
        nOrder={ordine?.ordine}
        ></EditOrder>
    }
        
        
        </main>
    )
}
export default OrdineDettaglio



