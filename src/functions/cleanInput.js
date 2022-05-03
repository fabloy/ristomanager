export const cleanInput = ()=>{
  let elements =  document.querySelectorAll("input, textarea");
  for(let i=0; i<=elements.length; i++){
    elements[i].value=""
  }
}