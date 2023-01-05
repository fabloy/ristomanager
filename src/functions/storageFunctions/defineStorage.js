import { useSelector } from "react-redux";
import { setNome, setOrdiniDaEvadere , setOrdiniEvasi} from "../../Store/StoreUser";


const defineStorage = (dispatch,ordiniDaEvadere, ordiniEvasi)=>{
    if(localStorage.admin==="true" && localStorage.logged==="true"){
     dispatch(setNome(localStorage.nome))
     //Quando ordiniDaEvadere-StateGlobale.length è uguale a zero e ordiniDaEvadere in localstorage è popolato
    // prendi quello che hai in localstorage e mettilo in ordiniDaEvadere
    if(ordiniDaEvadere?.length===0 && localStorage.ordiniDaEvadere?.length>2){
     let newArray = JSON.parse(localStorage?.ordiniDaEvadere)
      newArray.map(n=>{
       return dispatch(setOrdiniDaEvadere(n))
     })
    }
    if(ordiniEvasi?.length===0 && localStorage.ordiniEvasi?.length>2){
     let newArray = JSON.parse(localStorage.ordiniEvasi)
     dispatch(setOrdiniEvasi(newArray))
   }
 }
 }

 const defineLSinOperatorArea = (ordiniDaEvadere, ordiniEvasi,dispatch)=>{
  //sei loggato? allora crea in localStorage ordiniDaEvadere e OrdiniEvasi
  if(localStorage.logged==="true" ){
    dispatch(setNome(localStorage.nome))
    !localStorage.ordiniDaEvadere && localStorage.setItem("ordiniDaEvadere", "[]")
    !localStorage.ordiniEvasi && localStorage.setItem("ordiniEvasi", "[]")
  
    //ordiniDaEvadere in GlobalState è vuoto && OrdiniDaEvadere in localstorage è popolato?
    //estrai il contenuto e inseriscilo dentro ordiniDaEVadere in GLobalState
  if(ordiniDaEvadere.length===0 && localStorage.ordiniDaEvadere.length>2){
    let newArray = JSON.parse(localStorage?.ordiniDaEvadere)
    newArray.map( n=> dispatch(setOrdiniDaEvadere(n)) )
   }
  if(ordiniEvasi.length===0 && localStorage.ordiniEvasi.length>2){
    dispatch( setOrdiniEvasi((JSON.parse(localStorage.ordiniEvasi))))
  }
  }
 } 

 export {defineStorage,defineLSinOperatorArea}