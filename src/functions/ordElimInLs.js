export const ordElimInLs= (e)=>{
    let newArr = JSON.parse(localStorage.ordiniDaEvadere).filter(ord=>ord.id!==e.id)
    localStorage.ordiniDaEvadere=JSON.stringify(newArr)
   }