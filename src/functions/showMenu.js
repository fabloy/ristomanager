
export const showMenu = (val)=>{
    console.log("showmenu")
    let open = ()=>document.getElementsByClassName("menuSection")[0].style.maxHeight="6rem"
    let close = ()=>document.getElementsByClassName("menuSection")[0].style.maxHeight="0rem"
    val===false? open() : close()
    


}