import React from "react";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { useSelector } from "react-redux"

const RegistrazioneCorretta=()=>{
    const {nome} = useSelector(state=>state)
    return(
        <section>
            <p>
             Benvenuto {nome}<br></br>
             la tua registrazione è avvenuta correttamente,
             torna alla 
             <Link 
              to="/">
               Home 
             </Link> 
              per monitorare i tuoi ordini 
            </p>
        </section>
    )
}

export default RegistrazioneCorretta