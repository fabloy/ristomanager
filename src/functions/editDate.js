export const reverseDate = (day)=>{
     day = day.split("-")
     let a = day[0]
     day[0]=day[2];
     day[2]=a
     let dataDef="";
     day.map(d=>dataDef+=`${d} `)
     return dataDef
}