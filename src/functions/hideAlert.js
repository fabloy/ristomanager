const hideAlert = ()=>{
  console.log("hide")
    let alertMsg = document.getElementsByClassName("alertInfo")[0]
    const editStyle = ()=>{
     alertMsg.style.maxHeight="0px"
     alertMsg.style.bottom="150vh"
     console.log(alertMsg)
   }
    alertMsg? editStyle() : console.log("Alert non letto")
   } 
   export default hideAlert