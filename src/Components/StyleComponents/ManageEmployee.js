
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import {dateManager} from '../../functions/dateManager'
function ManageEmployee() {
  const {operatoriAggiunti} = useSelector(state=>state)
  const [weekDays, setWeekDays] = useState(["Lun","Mart","Merc","Giov","Ven","Sab","Dom"])
  let numberDay = 0;
  const [dayToShow, setDayToShow] = useState("")
  const settimane = [1,2,3,4]
  const month=dateManager()

  useEffect(()=>{
    let s = new Date()
    console.log(new Date().toLocaleString('it', {  weekday: 'long' }))
    console.log(s.toLocaleString('it', {  month: 'long' }))
  },[])
  return (
    <div style={{marginTop:"20vh"}}>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {
            weekDays.map(el=><th> {el} </th>)
          }
        </tr>
      </thead>
      <tbody>
       { settimane.map(s=><tr>
          <td></td>
            {
              
              weekDays.map(d=>{
                numberDay+=1;
                
                let numberToShow = month.filter((el)=>el.number===numberDay)
               return <td>
                <button
                 onClick={()=>{
                  let elToShow = weekDays.filter(m=>m===d)
                  setDayToShow({day:elToShow, number:numberToShow})
                }}
                >
                  { numberDay.toString() }
                </button>
              </td>
              
              })
            }
          </tr>)
       }
       

        
      </tbody>
    </Table>
    <article>
      <ul>
        {
          operatoriAggiunti.map(el=> el.nome)
        }
      </ul>
      <ul>{
        dayToShow.day + dayToShow.number[0].number
      }
      
      </ul>
    </article>
    </div>
  );
}

export default ManageEmployee;