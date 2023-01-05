import { useDispatch, useSelector } from "react-redux"
import { setLogged,setNome,setOrdiniDaEvadere,setAdmin } from "../../Store/StoreUser"

  export const createStorage = (id,nome)=>{
    localStorage.setItem("admin","true")
    localStorage.setItem("logged","true")
    localStorage.setItem("id",id)
    localStorage.setItem("nome",nome)
    
}