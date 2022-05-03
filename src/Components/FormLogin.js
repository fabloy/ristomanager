import React from "react"
import { useState } from "react"
// import { submitUser } from "../functions/submitUser"


const FormLogin = ()=>{

const [attivita, setAttivita]= useState()
const [email, setEmail]= useState()
const [password, setPassword]= useState()
// const [attivitaLogin, setAttivitaLogin]= useState()


return(
    <>
    <form >
        <h2>Login</h2>
     <label>
      nome attività
     </label>
        <input 
         type="text" 
         value={attivita} 
         onChange={(e)=>{setAttivita(e.target?.value)}}>
         </input>
        
        <label>
            email
        </label>
        <input 
         type="email"
         value={email}
         onChange={(e)=>{setEmail(e.target?.value)}}
         >
         </input>
        <label>
         password
        </label>
        <input 
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target?.value)}}
        >
        </input>
        <input type="submit" >
        </input>
    </form>
    
    </>
)
}

export default FormLogin
