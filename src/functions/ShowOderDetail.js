export const showOrderDetail = ()=>{
 let wrapper = document.getElementsByClassName("OrdineDettaglio_wrapper__zUHXe")[0];
 let editCSS=()=>{
  wrapper.style.overflow="auto"
  wrapper.style.opacity= "1";
 }
 window.setTimeout(editCSS, 100)
}