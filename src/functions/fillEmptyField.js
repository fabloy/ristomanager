export const removeRequired = ()=>{
    let requiredsEl = document.querySelectorAll('[required]')
    for(let i = 0; i < requiredsEl.length; i++){
        requiredsEl[i].removeAttribute("required")
    }
   }


   export const manageSelectHTML = (prezzo, quantita)=>{
    Number(prezzo)
    Number(quantita)
    let lastValidValue = prezzo/quantita;
    let selectElementHTML = document.querySelector("select");
    if(selectElementHTML.value === "default"){
        selectElementHTML.value = lastValidValue
    }
   }
// export const fillEmptyField = (attr)=>{
//     attr.toString()
//     let response 
//     document.querySelector(`[${attr}]`).value.length <1 ? response=false : response=true
//     return response
// } 

