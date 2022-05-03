import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setOrdiniDaEvadere, filtraOrdiniDaEvadere, setOrdiniEvasi} from "../Store/StoreUser"
import { filtra } from "../functions/filtra";

 const Dashboard = ({elenco, input, funInput})=>{
    const dispatch = useDispatch()
    const {ordiniEvasi}=useSelector(state=>state)
    const evadiOrdine = (el, elenco)=>{
        dispatch(filtraOrdiniDaEvadere(filtra(el,elenco)[0]))
        dispatch(setOrdiniEvasi(filtra(el,elenco)[1]))
    }

    return(
        <div>
            <ul>
                <li>Ordini da evadere</li>
            {
                elenco.map((el, index)=>{
                    return(
                    <>
                     <li key={index}>
                         ordine n. {el.ordine}
                         prodotto: {el.descrizione} 
                     <button onClick={()=>{
                        evadiOrdine(el,elenco)
                       }}>
                        {input}
                      </button>
                     </li> 
                    </>
                    ) 
                })
            }
            </ul>
            <ul>
                <li>Ordini evasi:</li>
                {
                ordiniEvasi.map(ord=>{
                   return <li>ordine n. {ord.ordine.toString()}</li>
                })
                }</ul>
        </div>
    )
 }
 export default Dashboard