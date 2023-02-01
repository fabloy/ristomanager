import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
 

const CalendarGrid = ({dayToShow, operatorsToShow, operatorSelected})=>{
    const [shift, setShift] = useState()
    const {shifts} = useSelector(state=>state)
    useEffect(()=>{
     setShift({day:dayToShow, operators:[...operatorsToShow]})
    },[dayToShow, operatorsToShow])

    const setEnterExit = (dayToCheck,operatorToCheck)=>{
      let shiftFind = shifts.filter(shift=>shift.day===dayToCheck)
      let operatorFind = shiftFind[0]?.operator.filter(op=>op.id === operatorToCheck.id)
      return operatorFind
    } 
    return (
        <ul>
         {shift?.operators?.map((el=><li>
        <span>
          {el.nome}
        </span>
        <span>
         {setEnterExit(dayToShow, el)?.length > 0? ` enter: ${setEnterExit(dayToShow, el)[0]?.enter} exit:${setEnterExit(dayToShow, el)[0]?.exit}` : <button 
          onClick={()=>{
            operatorSelected(el)
          }}
          >inserisci orario</button>}
        </span>
        </li>))}
      </ul>
    )
}

export default CalendarGrid