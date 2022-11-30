import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrdineDettaglioCSS from "../Components/StyleComponents/OrdineDettaglio.module.css"
import crostata from "../images/crostata.jpg"

const OrdineDettaglio = ()=>{
 const [ordine, setOrdine] = useState()
 const [opacity, setOpacity]=useState("0")
 const params = useParams()
 const {ordiniDaEvadere} = useSelector(state=>state)

 const backgroundCSSRules = {
    backgroundImage: `url(${crostata}`, 
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
}
 
 useEffect(()=>{
     let ordToShow = ordiniDaEvadere.filter(el=>el.ordine.toString()===params.id)
     setOrdine(...ordToShow)
    },[params.id])

    return(
        <main>
            <section className={OrdineDettaglioCSS.wrapper}
             style={backgroundCSSRules}>
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
            </div>
            
        </section>
        </main>
    )
}
export default OrdineDettaglio



