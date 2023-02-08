import { useSelector } from "react-redux"

export const setEnterExit = (shifts,dayToCheck,operatorToCheck)=>{
    let shiftFind = shifts.filter(shift=>shift.day===dayToCheck)
    let operatorFind = shiftFind[0]?.operator.filter(op=>op.id === operatorToCheck.id)
    return operatorFind
  } 