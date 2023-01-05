import React, { useEffect } from "react"
import Home from "./Home.js"
import { useSelector,useDispatch} from "react-redux";
import FormRegistrazione from "./FormRegistrazione"
import { setLogged, setAdmin } from "../Store/StoreUser";

const Registrazione = ()=>{
 const {logged, admin}=useSelector(state=>state)
 const dispatch = useDispatch()
 
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
