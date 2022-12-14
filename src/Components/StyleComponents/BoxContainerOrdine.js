import {reverseDate}from "../../functions/editDate"
import { setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi, deleteOrdiniDaEvadere } from "../../Store/StoreUser";
import { Link } from "react-router-dom";
import AreaAdminCSS from "./../StyleComponents/AreaAdmin.module.css"
import { useDispatch } from "react-redux";
import { FaBeer, FaCheck, FaTrash} from 'react-icons/fa';
import { filtra } from "../../functions/filtra";
import { useSelector } from "react-redux";

const BoxContainerOrdine = ({ord})=>{
    const dispatch = useDispatch()
    const {nome, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)

    const evadiOrdine = (el, elenco)=>{
        console.log("evasione ordine")
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
    }

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
              <button className={AreaAdminCSS.buttonCancelOrd}
              onClick={()=>dispatch(deleteOrdiniDaEvadere(ord.ordine))}
              >
                <FaTrash></FaTrash>
              </button>
            </li>
    )
}

export default BoxContainerOrdine