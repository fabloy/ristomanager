import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filtra } from "../functions/filtra";
import { setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi } from "../Store/StoreUser";
import AreaOperatoreCSS from "../Components/StyleComponents/AreaOperatore.module.css"


const AreaOperatore = ()=>{
    const {nome, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
    const data = new Date()
    const dispatch = useDispatch()
    const evadiOrdine = (el, elenco)=>{
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
    }


    return(
    <main className={AreaOperatoreCSS.main}>
     <h4> Ciao <strong>{nome}</strong></h4>
     <p>Benvenuto nella tua homepage, in questa pagina puoi monitorare la panoramica
         dei tuoi ordini da evadere
     </p>
    <section>
     <p>ordini da evadere:</p>
     <ul>
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
     <p>ordini evasi:</p>
     <ul>
    {
        ordiniEvasi.map(ord=>{
            return <li>{ord.nome} ordine:{ord.ordine}</li>
        })
    }
    </ul>

    </section>
    <section>
        <div>
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

export default AreaOperatore