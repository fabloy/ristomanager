import React from "react"
import RegistrazioneCorretta from "./RegistrazioneCorretta"
import Home from "./Home.js"
import { useSelector } from "react-redux"
import FormRegistrazione from "./FormRegistrazione"

const Registrazione = ()=>{
 const {logged}=useSelector(state=>state)
 return(
  <>
    { logged ? <Home/>
     :
    <FormRegistrazione></FormRegistrazione>
    }
  </>
    
)
}

export default Registrazione
