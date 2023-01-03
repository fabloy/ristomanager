import React from "react"
import Home from "./Home.js"
import { useSelector,useDispatch} from "react-redux";
import FormRegistrazione from "./FormRegistrazione"
import { setLogged, setAdmin } from "../Store/StoreUser";

const Registrazione = ()=>{
 const {logged}=useSelector(state=>state)
 const dispatch = useDispatch()
 localStorage.logged==="true" && dispatch(setLogged(true))
 localStorage.admin==="true" && dispatch(setAdmin(true))
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
