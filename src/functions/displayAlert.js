const displayAlert = ()=>{
 let alertMsg = document.getElementsByClassName("alertInfo")[0]
 const editStyle = ()=>{
  alertMsg.style.maxHeight="30vh"
  alertMsg.style.bottom="0vh"
}
 alertMsg? setTimeout(editStyle, 500) : console.log("Alert non letto")
} 
export default displayAlert