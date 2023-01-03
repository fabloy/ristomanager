import { useSelector } from "react-redux";
import { setNome, setOrdiniDaEvadere , setOrdiniEvasi} from "../Store/StoreUser";


export const defineStorage = (dispatch,ordiniDaEvadere, ordiniEvasi)=>{
    if(localStorage.admin==="true" && localStorage.logged==="true"){
     dispatch(setNome(localStorage.nome))
    if(ordiniDaEvadere?.length===0 && localStorage.ordiniDaEvadere?.length>2){
     let newArray = JSON.parse(localStorage.ordiniDaEvadere)
     newArray.map(n=>{
        return dispatch(setOrdiniDaEvadere(n))
     })
    //  dispatch(setOrdiniDaEvadere(newArray))
    }
    if(ordiniEvasi?.length===0 && localStorage.ordiniEvasi?.length>2){
     let newArray = JSON.parse(localStorage.ordiniEvasi)
     dispatch(setOrdiniEvasi(newArray))
   }
 }
 }