import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AreaAdmin from "./AreaAdmin";
import AreaOperatore from "./AreaOperatore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdmin } from "../Store/StoreUser";
import FirstStepCSS from "./StyleComponents/FirstStep.module.css"



const FirstStep = ()=>{
    const dispatch=useDispatch()
    const {logged, admin} = useSelector(state=>state)

    return !logged? (
        
    <main className={`${FirstStepCSS.boxContainer}`}>

     <Link 
      className={`${FirstStepCSS.boxToSelect} ${FirstStepCSS.imgOne} ${FirstStepCSS.link}`} 
      to={'/registrazione'}
      >
      
       <h2
       className={`${FirstStepCSS.bottomTitle}`}
        onClick={
            ()=>{dispatch(setAdmin(false))
         }}>
         Area Operatore
        </h2>
      </Link>

      <Link 
       to={'/registrazione'}
       className={`${FirstStepCSS.boxToSelect} ${FirstStepCSS.imgTwo} ${FirstStepCSS.link}`}
       onClick={
        ()=>{dispatch(setAdmin(true))
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