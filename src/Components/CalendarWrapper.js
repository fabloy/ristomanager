import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import {CalendarWrapperCSS} from "../Components/StyleComponents/CalendarWrapper.module.css"
import CalendarGrid from './CalendarGrid';

function CalendarWrapper() {
  const [value, onChange] = useState(new Date());
  const [dayToShow, setDayToShow] = useState("Oggi")
  const {operatoriAggiunti} = useSelector(state=>state)
  const [showShiftsManager, setShowShiftsManager] = useState(false)
  const [operatorSelectedToEdit, setOperatorSelectedToEdit] = useState({})
  

  return (
    <div style={{marginTop:"20vh"}}>
      <Calendar 
       onChange={(value, event) =>{
        event.target.getAttribute("aria-label")===null ? setDayToShow(event.target.lastChild.ariaLabel) : setDayToShow(event.target.getAttribute("aria-label"))
       } } 
       value={value} 
       minDate={new Date(2023, 0, 1)}
       maxDate={new Date(2023, 11, 31)}
       />

      <div>
      <p>{dayToShow}</p>
      <CalendarGrid 
       dayToShow={dayToShow}
       operatorsToShow={operatoriAggiunti}
       operatorSelected={(el)=>{
        setOperatorSelectedToEdit(el)
        setShowShiftsManager(true)
      }}
       />
       <button onClick={()=>setShowShiftsManager(!showShiftsManager)}>
        Modifica calendario
       </button>
     </div>
    {showShiftsManager && <article>
      {operatorSelectedToEdit.nome}
      orario: 
      <input 
       type="time"
       onChange={(e)=>console.log(dayToShow,e.target.value, operatorSelectedToEdit)}
       ></input>
     </article>
    }
    </div>
    
  );
}

export default CalendarWrapper