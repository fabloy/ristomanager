import { useEffect } from "react"
import { useState } from "react"

const CalendarGrid = ({dayToShow, operatorsToShow, operatorSelected})=>{
    const [shifts, setShifts] = useState()
    useEffect(()=>{
     setShifts({day:dayToShow, operators:[...operatorsToShow]})
    },[dayToShow])
    return (
        <ul>
         {shifts?.operators?.map((el=><li>
        <span>
          {el.nome}
        </span>
        <span>
         {el.orario? el.orario : <button 
          onClick={()=>operatorSelected(el)}
          >inserisci orario</button>}
        </span>
        </li>))}
      </ul>
    )
}

export default CalendarGrid