const hideAlert = ()=>{
    let alertMsg = document.getElementsByClassName("alertInfo")[0]
    const editStyle = ()=>{
     alertMsg.style.maxHeight="0px"
     alertMsg.style.bottom="100vh"
   }
    alertMsg? editStyle() : console.log("Alert non letto")
   } 
   export default hideAlert