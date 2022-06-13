const displayAlert = ()=>{
 let alertMsg = document.getElementById("alertMsg")
 const editStyle = ()=>alertMsg.style.maxHeight="0px"
 alertMsg? setTimeout(editStyle, 2000) : console.log("Alert non letto")
} 
export default displayAlert