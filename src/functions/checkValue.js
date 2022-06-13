import { validateNomeAttivita, validateEmail, validatePassword } from "./submitUser"
export const checkNome = (nome)=>{
    if(nome){
        if(validateNomeAttivita(nome)=== false){
        return alert="Nome troppo corto"
        }
        return alert=""
        
}
}

export const checkEmail = (email)=>{
    if(email){
       if(validateEmail(email)=== false){
        return alert="Email non valida"
       }else{
        return alert=""
       }
       
     }
  }

 export const checkPassword = (password)=>{
    if(password){
       if(validatePassword(password)=== false){
       return alert="password non valida"
       }else{
          alert=""
       }
       
     }
  }