import React, { useEffect, useState } from "react";
import LogoutCSS from "../Components/StyleComponents/Logout.module.css"
const Logout=({logged})=>{
    const [show, setShow] = useState(false)
    let url = window.location.href

    useEffect(()=>{
     url==='/logout' && logged? setShow(true) : setShow(false)
     logged? setShow(true):setShow(false)
    },[url])

    const logout = ()=>{
     setShow(false)
     localStorage.clear()
     window.location.href='/'
    }
    

    return(
        <section 
        className={LogoutCSS.wrapper}
         style={
            show? {display:"block"}:{display:"none"}
            }>
         <h3>Logout</h3>
          <p>
            Sei sicuro di voler effettuare il logout?
          </p>
            <button onClick={()=>logout()}>
                si
            </button>
            <button onClick={()=>{
                setShow(false)
                }}>no</button>
        </section>
    )
}
export default Logout