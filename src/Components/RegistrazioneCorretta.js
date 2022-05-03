import React from "react";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { useSelector } from "react-redux"

const RegistrazioneCorretta=()=>{
    const {nome} = useSelector(state=>state)
    return(
        <section>
            <p>
             Benvenuto {nome}
             la tua registrazione è avvenuta correttamente,
             torna alla home per monitorare i tuoi ordini 
            </p>
            <button>
                <Link to="/">
                 Home
                </Link>
            </button>
        </section>
    )
}

export default RegistrazioneCorretta