import React, { useEffect } from "react";
import {setNome, setEmail, setPassword, setId, setLogged} from "../Store/StoreUser"
import {useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import {validateEmail, validatePassword, validateNomeAttivita} from "../functions/submitUser"
import { checkNome, checkEmail, checkPassword } from "../functions/checkValue";
import { useState } from "react"
import { Attivita } from "../Model/Attivita"
import FormBootstrap from "../Components/StyleComponents/FormBootstrap"

const FormRegistrazione = ()=>{
return(
          <FormBootstrap
          >
          </FormBootstrap>
          
    )
}

export default FormRegistrazione