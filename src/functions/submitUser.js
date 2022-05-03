export const validateEmail = (attivitaEmail)=>{
 let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return emailPattern.test(attivitaEmail) 
}  

export const validatePassword = (attivitaPassword)=>{
 let passwordPattern  = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
return passwordPattern.test(attivitaPassword)
}

export const validateNomeAttivita= (attivitaNome)=>{
if(attivitaNome.length>3 && attivitaNome.length<25 === true){
    return true
}
return false
   }

