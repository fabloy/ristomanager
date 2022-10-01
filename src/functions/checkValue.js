import { validateNomeAttivita, validateEmail, validatePassword } from "./submitUser"
export const checkNome = (nome)=>{
    if(nome){
        if(validateNomeAttivita(nome) === false){
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

  export const checkProductSelected = (value, txt1, txt2)=>{
   if(value===""){
      return txt2
   }
   return txt1
  }

  export const checkTel = (tel)=> {
   let response
   tel.length!==10 ? response="Numero di telefono non valido, deve essere composto da 10 cifre" : response=""
   return response  
}

export const checkDate =(date)=>{
   if(date){
      return true
   }
   return false
}