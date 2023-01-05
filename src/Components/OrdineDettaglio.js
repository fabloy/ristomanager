import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrdineDettaglioCSS from "../Components/StyleComponents/OrdineDettaglio.module.css"
import { defineStorage } from "../functions/storageFunctions/defineStorage";
import EditOrder from "./EditOrder";

const OrdineDettaglio = ()=>{
 const [ordine, setOrdine] = useState()
 const params = useParams()
 const {ordiniDaEvadere, ordiniEvasi} = useSelector(state=>state)
 const [showEdit, setShowEdit] = useState(false)
 const [ordId, setOrdId] = useState(params.id || localStorage.idOrdSelected)
 const dispatch = useDispatch()

 defineStorage(dispatch,ordiniDaEvadere, ordiniEvasi)
 useEffect(()=>{
     let ordToShow = ordiniDaEvadere.filter(el=>el.id.toString()===ordId)
     setOrdine(...ordToShow)
     console.log(ordToShow, ordiniDaEvadere)
    },[params.id])

    return(
        <main>
          {!showEdit ? <section className={OrdineDettaglioCSS.wrapper}>
            <div>
            <h2>Ordine n: {ordine?.id}</h2>
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
        nOrder={ordine?.id}
        ></EditOrder>
    }
      </main>
    )
}
export default OrdineDettaglio



