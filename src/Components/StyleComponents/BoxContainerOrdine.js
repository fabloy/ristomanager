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
import { ordElimInLs } from "../../functions/ordElimInLs";

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
    const deleteOrd = (ord)=>{
      dispatch(deleteOrdiniDaEvadere(ord))
    }
    

    return(
        <li 
         className={AreaAdminCSS.ordDaEvadere}
         onClick={()=>localStorage.idOrdSelected=ordId}
         key={ordId}
         >
             <Link to={`/ordine/${ordId}`}>
              <h6>ord n. {ord?.id?.toString()}</h6>
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
              onClick={()=>{
                deleteOrd(ord)
                ordElimInLs(ord)
              }}
              >
                <FaTrash></FaTrash>
              </button>
            </li>
    )
}

export default BoxContainerOrdine