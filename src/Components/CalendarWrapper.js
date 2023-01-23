import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import CalendarGrid from './CalendarGrid';
import "../../src/calendar.css"
import CalendarShiftsManager from './CalendarShiftsManger';


function CalendarWrapper() {
  const {shifts} = useSelector(state=>state)
  let shiftsDays = shifts?.map(el=>el?.day)
  const [value, onChange] = useState(new Date());
  const [dayToShow, setDayToShow] = useState()
  const {operatoriAggiunti} = useSelector(state=>state)
  const [showShiftsManager, setShowShiftsManager] = useState(false)
  const [operatorSelectedToEdit, setOperatorSelectedToEdit] = useState()
  const [shiftId, setShiftId] = useState(shifts.length)
  const [shiftsSent, setShiftsSent] = useState([...shiftsDays])

  const shiftsManagerView = ()=>{
   operatorSelectedToEdit && setShowShiftsManager(true) 
  }
  const updateSfhitsDays = ()=>{
    [...shiftsSent]!==[...shifts] ? setShiftsSent([shifts.map(el=>el?.day)]) : setShiftsSent(shiftsSent)

  }
 
  const generateShiftId = ()=>{
    shiftsSent?.map(el=>{
     return dayToShow !==el ? setShiftId(shiftId+1) : setShiftId(shiftId)
    })
  }
  const checkShiftsSent = (day)=>{
    let value = shiftsSent.filter(el=>el===day)
    value.length===0 && generateShiftId()
  }

  useEffect(()=>{
    shiftsManagerView()
    // checkShiftsSent(dayToShow)
    // updateSfhitsDays()
    shiftId !== shifts.length && setShiftId(shifts.length)
    console.log(shiftId, shifts.length)
    
  },[operatorSelectedToEdit, dayToShow, shifts.length])

  return (
    <section className='calendarWrapper'>
      <Calendar 
       onChange={(value, event) =>{
        event.target.getAttribute("aria-label")===null ? setDayToShow(event.target.lastChild.ariaLabel) : setDayToShow(event.target.getAttribute("aria-label"))
      }} 
       value={value} 
       minDate={new Date(2023, 0, 1)}
       maxDate={new Date(2023, 11, 31)}
       className={"prova"}
       />

      <div>
      <p>{dayToShow}</p>
      <CalendarGrid 
       dayToShow={dayToShow}
       operatorsToShow={operatoriAggiunti}
       operatorSelected={(el)=>{
        setOperatorSelectedToEdit(el)
      }}
       />
       <button onClick={()=>setShowShiftsManager(true)}>
        Modifica calendario
       </button>
     </div>
     <CalendarShiftsManager
     show={showShiftsManager}
     operatorSelectedToEdit={operatorSelectedToEdit}
     dayToShow={dayToShow}
     shiftId={shiftId}
    />
    </section>
    
  );
}

export default CalendarWrapper