import React from "react"
import RegistrazioneCorretta from "./RegistrazioneCorretta"
import { useSelector } from "react-redux"
import FormRegistrazione from "./FormRegistrazione"

const Registrazione = ()=>{
 const {logged}=useSelector(state=>state)
 return(
  <>
    { logged ? <RegistrazioneCorretta/>
     :
    <FormRegistrazione></FormRegistrazione>
    }
  </>
    
)
}

export default Registrazione
