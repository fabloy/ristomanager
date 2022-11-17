import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filtra } from "../functions/filtra";
import { setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi } from "../Store/StoreUser";
import { useState } from "react";
import { useEffect } from "react";
import AreaAdminCSS from "./StyleComponents/AreaAdmin.module.css"

const AreaAdmin = ()=>{
    const {nome, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
    const data = new Date()
    const [day, setDay]=useState({
        day:data.getDate(), 
        month:data.getMonth()+1, 
        year: data.getFullYear()
    });
    const [advisor, setAdvisor] = useState("Nessun ordine da evadere")
    const dispatch = useDispatch()
    const evadiOrdine = (el, elenco)=>{
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
    }
    
    useEffect(()=>{
     ordiniDaEvadere.length>0 ? setAdvisor("") : setAdvisor("Nessun ordine da evadere")
    },[ordiniDaEvadere.length])
  

    return(
    <main className={AreaAdminCSS.main}>
     <h4> Ciao <strong>{nome}</strong></h4>
     <p>
      Benvenuto nella tua homepage, monitora i tuoi ordini da evadere.
     </p>
    
    <section className={AreaAdminCSS.section}>
    {`
     ${day.day}/${day.month}/${day.year}
     `
    }
     <h5 className={AreaAdminCSS.h5}>Ordini da evadere:</h5>
     <ul className={AreaAdminCSS.ul}>
      <li>{advisor}</li>
    {
        ordiniDaEvadere.map(ord=>{
            return(
                <li style={
                    {margin:"10px",
                    padding: "10px",
                     background:"black",
                     color:"white", 
                     width:"10rem"}
                }
             >
            <Link to={`/ordine/${ord.ordine}`}>
             ordine: <strong>{ord.ordine.toString()}</strong> di: {ord.nome} prodotto: {ord.descrizione} consegna: {ord.data}
            </Link>
            <button onClick={()=>evadiOrdine(ord, ordiniDaEvadere)}>Evadi ordine</button>
            </li>
            ) 
        })
    }
    </ul>
    </section>
    <section>
     <h5>Ordini evasi:</h5>
     <ul>
    {
        ordiniEvasi.map(ord=>{
            return <li>
                <b>{ord.nome}</b> ordine.{ord.ordine}
                </li>
        })
    }
    </ul>
    </section>
    <section>
        <div>
         <Link to={`/new-operator/${false}`}>
          <p>Crea un nuovo utente operatore</p>
         </Link>
         <Link to="/inserisciordine">
          <p>Inserisci nuovo ordine</p>
         </Link>
         <Link to="/evadiordine">
         <p>Evadi Ordine</p>
         </Link>
        </div>
    </section>
    </main>
    )
}

export default AreaAdmin