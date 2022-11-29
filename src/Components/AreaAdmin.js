import React from "react";
import ButtonInput from "./MiniComponents/formComponents/ButtonInput"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filtra } from "../functions/filtra";
import {reverseDate}from "../functions/editDate"
import { setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi } from "../Store/StoreUser";
import { useState } from "react";
import { useEffect } from "react";
import AreaAdminCSS from "./StyleComponents/AreaAdmin.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCakeCandles,faIceCream} from '@fortawesome/free-solid-svg-icons'

import { FaBeer, FaCheck} from 'react-icons/fa';


const AreaAdmin = ()=>{
    const {nome, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
    const data = new Date()
    const [advisor, setAdvisor] = useState("Nessun ordine da evadere")
    const dispatch = useDispatch()
    const evadiOrdine = (el, elenco)=>{
        console.log("evasione ordine")
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
    }
    
    useEffect(()=>{
     ordiniDaEvadere.length>0 ? setAdvisor("") : setAdvisor("Nessun ordine da evadere")
    
    },[ordiniDaEvadere.length])
  

    return(
    <main className={AreaAdminCSS.main}>
     <aside className={AreaAdminCSS.aside}>
      <p>
       <h4> Ciao <strong>{nome}</strong></h4>
        Benvenuto nella tua homepage,<br></br> 
        monitora i tuoi ordini da evadere.
      </p>
     </aside>
     <aside className={AreaAdminCSS.linkWrapper}>
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
    </aside>   
    
    <section className={AreaAdminCSS.section}>
    <FontAwesomeIcon icon={faCakeCandles} />
     <h5 className={AreaAdminCSS.h5}>Ordini da evadere</h5>
     <ul className={AreaAdminCSS.ul}>
      <li>{advisor}</li>
    {
        ordiniDaEvadere.map(ord=>{
            return(
            <li className={AreaAdminCSS.ordDaEvadere}>
             <Link to={`/ordine/${ord.ordine}`}>
              <h6>ord n. {ord.ordine.toString()}</h6>
              <h6><strong>{ord.nomeProdotto}</strong></h6>
              <p>{reverseDate(ord.data)} <br/>
               di {ord.nomeCliente} <br/>
              </p>
             </Link>
             
             <button className={AreaAdminCSS.buttonDoneOrd}
              onClick={()=>evadiOrdine(ord, ordiniDaEvadere)}
              >
                <FaCheck></FaCheck>
              </button>
            </li>
            ) 
        })
    }
    </ul>
    </section>
    <section className={AreaAdminCSS.section}>
    <FontAwesomeIcon icon={faIceCream} />
     <h5>Ordini evasi</h5>
    
     <ul className={AreaAdminCSS.ul}>
    {
        ordiniEvasi.map(ord=>{
            return <li>
                    <b>Ordine.{ord.ordine}</b> - {ord.nomeProdotto}
                   </li>
        })
    }
    </ul>
    </section>

    </main>
    )
}

export default AreaAdmin