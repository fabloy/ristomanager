import {reverseDate}from "../../functions/editDate"
import { setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi, deleteOrdiniDaEvadere } from "../../Store/StoreUser";
import { Link } from "react-router-dom";
import AreaAdminCSS from "./../StyleComponents/AreaAdmin.module.css"
import { useDispatch } from "react-redux";
import { FaBeer, FaCheck, FaTrash} from 'react-icons/fa';
import { filtra } from "../../functions/filtra";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const BoxContainerOrdine = ({ord})=>{
    const dispatch = useDispatch()
    const {ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
    const [ordId, setOrdId] = useState(ord?.id|| localStorage.idOrdSelected)

    const evadiOrdine = (el, elenco)=>{
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
        localStorage.ordiniDaEvadere=JSON.stringify(filtraOrdiniDaEvadere(filtra(el,elenco)[0]).payload)
        localStorage.setItem("ordiniEvasi",JSON.stringify([...ordiniEvasi, ord]))
    }

    useEffect(()=>{
      console.log(ordId)
    })

    return(
        <li 
         className={AreaAdminCSS.ordDaEvadere}
         onClick={()=>localStorage.idOrdSelected=ordId}
         >
             <Link to={`/ordine/${ordId}`}>
              <h6>ord n. {ord?.ordine?.toString()}</h6>
              <h6><strong>{ord?.nomeProdotto}</strong></h6>
              <p>
                {/* {reverseDate(ord?.data)} */}
                 <br/>
               di {ord?.nomeCliente} <br/>
              </p>
             </Link>
             
             <button className={AreaAdminCSS.buttonDoneOrd}
              onClick={()=>evadiOrdine(ord, ordiniDaEvadere)}
              >
                <FaCheck></FaCheck>
              </button>
              <button className={AreaAdminCSS.buttonCancelOrd}
              onClick={()=>dispatch(deleteOrdiniDaEvadere(ord))}
              >
                <FaTrash></FaTrash>
              </button>
            </li>
    )
}

export default BoxContainerOrdine