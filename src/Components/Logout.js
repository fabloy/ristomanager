import React, { useEffect, useState } from "react";

const Logout=({logged})=>{
    const [show, setShow] = useState(false)
    let url = window.location.href

    useEffect(()=>{
     url==='/logout' && logged? setShow(true) : setShow(false)
     logged? setShow(true):setShow(false)
    },[url])

    const logout = ()=>{
     setShow(false)
     window.location.href='/'
    }
    

    return(
        <section style={show? {display:"block"}:{display:"none"}}>
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