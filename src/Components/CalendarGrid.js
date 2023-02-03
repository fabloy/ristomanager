import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
 import {setEnterExit} from "../functions/setEnterExit"

const CalendarGrid = ({dayToShow, operatorsToShow, operatorSelected})=>{
    const [shift, setShift] = useState()
    const {shifts} = useSelector(state=>state)
    useEffect(()=>{
     setShift({day:dayToShow, operators:[...operatorsToShow]})
    },[dayToShow, operatorsToShow])

   
    return (
      <div className="calendarGridWrapper">
        <p>{dayToShow}</p>
        <p>{shift?.operators?.length===0 && "Nessun operatore"}</p>
        <ul>
         {shift?.operators?.map((el=><li>
        <span 
          onClick={()=>operatorSelected(el)}>
          {el.nome}
        </span>
        <span>
         {setEnterExit(shifts,dayToShow, el)?.length > 0? ` enter: ${setEnterExit(shifts,dayToShow, el)[0]?.enter} exit:${setEnterExit(shifts,dayToShow, el)[0]?.exit}` : <button 
          onClick={()=>operatorSelected(el)}
          >
            inserisci orario
          </button>}
        </span>
        </li>))}
      </ul>
      </div>
    )
}

export default CalendarGrid