import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { setShifts, editShift } from '../Store/StoreUser';

const CalendarShiftsManager = ({
  show, 
  operatorSelectedToEdit,
  dayToShow,
  shiftId})=>{
 const {operatoriAggiunti, shifts} = useSelector(state=>state)
 const dispatch = useDispatch()
 const [hours, setHours] = useState({enter:"", exit:""})
 const [shift, setShift] = useState()



 const sendShift = ()=>{
  //quando il gionro che stai modificando non ha orari già segnati:
  let valFound = shifts.filter(el=>el?.day===dayToShow)
  valFound.length===0 && dispatch(setShifts(shift))

  //quando il giorno che stai modificando ha già un orario inserito in quel giorno
  //inseriscimi tutte le modifiche sul turno in questione  ma non aggiornare l'id e non aggiungere nuovi ogg.
  valFound.length>0 && shifts.map((el)=>{
     if(el.day === shift.day){
      let newShift={...shift, id:el.id}
      dispatch(editShift(newShift))
    }
  })
 }

    useEffect(()=>{
      setShift({day:dayToShow, id:shiftId, operator:[{...operatorSelectedToEdit, ...hours}]})
    },[dayToShow, hours, operatorSelectedToEdit])


    return(
      <>
      { show && operatoriAggiunti.length>0 && operatorSelectedToEdit ?  <article style={{"background":"wheat"}}>
       <li>
        <p>{`${operatorSelectedToEdit?.nome}`}</p> 
        <span
         className='inlineBlock'      
        >
        entrata:
        <input 
         type="time"
         onChange={(e)=>{
          setHours({...hours, enter:e.target.value})
          setShift({...shift, ...hours})

        }}
        ></input>
       </span>
       <span
        className='inlineBlock'
       >
       uscita:
       <input 
        type="time"
        onChange={(e)=>{
          setHours({...hours, exit:e.target.value})
          setShift({...shift,...hours})
        }}
       ></input>
       </span>
       <button
        onClick={()=>{
          sendShift()
        }}
       >
        Invio
       </button>
      </li>
     </article>
    :
    (show && operatoriAggiunti.length===0) && <div>
    <p>Non ci sono operatori nel databse</p>
    <Link to={'/new-operator/false'}>
     <button>
       Crea operatore
     </button>
    </Link>
   </div>
    }
    {
     (show && operatoriAggiunti.length>0 && !operatorSelectedToEdit) && <p>Seleziona un operatore</p>
    }
    
     </>
    )
}

export default CalendarShiftsManager