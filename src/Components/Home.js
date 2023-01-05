
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstStep from "./FirstStep";
import { setAdmin , setLogged} from "../Store/StoreUser";

const Home=()=>{
 
 return(
   <FirstStep/> 
  )
}
export default Home