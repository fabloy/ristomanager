import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import AreaAdminCSS from "./StyleComponents/AreaAdmin.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCakeCandles,faIceCream} from '@fortawesome/free-solid-svg-icons'
import BoxContainerOrdine from "./StyleComponents/BoxContainerOrdine";
import ButtonInput from "./MiniComponents/formComponents/ButtonInput";

const AreaAdmin = ()=>{
    const {nome, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
    const data = new Date()
    const [advisor, setAdvisor] = useState("Nessun ordine da evadere")
    const dispatch = useDispatch()
  
    
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
          <ButtonInput
          triggerName={"Crea utente operatore"}
          />
         </Link>
         <Link to="/inserisciordine">
         <ButtonInput
          triggerName={"Crea nuovo ordine"}
          />
         </Link>
        </div>
    </aside>   
    
    <aside className={AreaAdminCSS.ordersWrapper}>
    <section className={AreaAdminCSS.section}>
    <FontAwesomeIcon icon={faCakeCandles} />
     <h5 className={AreaAdminCSS.h5}>Ordini da evadere</h5>
     <ul className={AreaAdminCSS.ul}>
      <li>{advisor}</li>
    {
        ordiniDaEvadere.map(ord=>{
            return(
            <BoxContainerOrdine
             ord={ord}
            />
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
       ordiniEvasi.length<1 && <li>Nessun ordine evaso</li>
       } 
    {
        ordiniEvasi.map(ord=>{
            return <li>
                    <b>Ordine.{ord.ordine}</b> - {ord.nomeProdotto}
                   </li>
        })
    }
    </ul>
    </section>
    </aside>

    </main>
    )
}

export default AreaAdmin