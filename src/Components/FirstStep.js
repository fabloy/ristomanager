import React from "react";
import { Link } from "react-router-dom";
import AreaAdmin from "./AreaAdmin";
import AreaOperatore from "./AreaOperatore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdmin, setOrdiniDaEvadere } from "../Store/StoreUser";
import FirstStepCSS from "./StyleComponents/FirstStep.module.css"
import { setLogged, setNome } from "../Store/StoreUser";
import { useEffect } from "react";



const FirstStep = ()=>{
    const dispatch=useDispatch()
    const {logged, admin, nome,ordiniDaEvadere} = useSelector(state=>state)
    
    useEffect(()=>{
     !localStorage.logged && localStorage.setItem("logged",logged.toString())
     !localStorage.admin && localStorage.setItem("admin",admin.toString())
     },[])
   //   localStorage.admin

    return !logged? (
        
    <main className={`${FirstStepCSS.boxContainer}`}>

     <Link 
      className={`${FirstStepCSS.boxToSelect} ${FirstStepCSS.imgOne} ${FirstStepCSS.link}`} 
      to={'/registrazione'}
      onClick={
         ()=>{dispatch(setAdmin(false))
            localStorage.admin="false"
      }}
      >
      
       <h2
       className={`${FirstStepCSS.bottomTitle}`}
        >
         Area Operatore
        </h2>
      </Link>

      <Link 
       to={'/registrazione'}
       className={`${FirstStepCSS.boxToSelect} ${FirstStepCSS.imgTwo} ${FirstStepCSS.link}`}
       onClick={
        ()=>{dispatch(setAdmin(true))
         localStorage.admin="true"
     }}
      >
         <h2 
          className={`${FirstStepCSS.bottomTitle}`}
          >
           Area Amministratore
         </h2>
      </Link>
      
    </main>
    )
    :
    admin? <AreaAdmin /> : <AreaOperatore/>
}

export default FirstStep