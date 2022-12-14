const displayAlert = ()=>{
 let alertMsg = document.getElementsByClassName("alertInfo")[0]
 const editStyle = ()=>{
  alertMsg.style.maxHeight="30vh"
  alertMsg.style.bottom="100vh"
  alertMsg.style.color="green"
}
 alertMsg? setTimeout(editStyle, 500) : console.log("displayAlert non letto")
} 
export default displayAlert