export const dateManager = ()=>{
    let month=[]
    let currentday = 0
    let dayArray=["LUN","MART","MERC","GIOV","VEN","SAB","DOM"]
    for(let a = 0; a<32; a++){
        currentday+=1;
        dayArray=[...dayArray,"LUN","MART","MERC","GIOV","VEN","SAB","DOM"]
        month=[...month, {number:currentday, day:dayArray[a]}]
         }
    return month
}