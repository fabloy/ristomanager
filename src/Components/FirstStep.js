import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AreaAdmin from "./AreaAdmin";
import AreaOperatore from "./AreaOperatore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdmin } from "../Store/StoreUser";

const FirstStep = ()=>{
    const dispatch=useDispatch()
    const {logged, admin} = useSelector(state=>state)

    return !logged? (<main>
        <div>
        
            <h2 onClick={()=>{
                dispatch(setAdmin(true))
                }}>
             <Link to={'/registrazione'}>
              Area Amministratore
             </Link>
            </h2>
        
        </div>
        <div>
            <h2 onClick={()=>{
                dispatch(setAdmin(false))
                }}>
           <Link to={'/registrazione'}>
                Area Operatore
            </Link>
            
            </h2>
            {admin?.toString()}
        </div>
    </main>)
    :
    admin? <AreaAdmin /> : <AreaOperatore/>
}

export default FirstStep