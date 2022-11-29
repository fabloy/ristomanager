import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const SelectInput = ({inputItems, itemSelectFun, setAlert})=>{
  const [validated, setValidated] = useState(false);
  const [nameProductSelected, setNameProductSelected] = useState()

  const editClass = (value)=>{
    value===""? setValidated(false) : setValidated(true)
    }
   
   return(
    <>
      <label for="listItemBox">tipo di prodotto:</label>
      <Form.Select 
       aria-label="Default select example"
       id="listItemBox"
       onChange={(e)=>{
        console.log(e.target.value)
        setAlert(e.target.value)
        itemSelectFun(e.target.value)
        editClass(e.target.value)
      }}
       className={validated===false? "is-invalid" : "is-valid"}
       >
      <option></option>
      {
        inputItems?.map((i, index)=>{
          return <option
                  key={index} 
                  value={i.price}
                  >
                  {i.name}
                  
                 </option>
        })
      }
    
    </Form.Select>
    </>
    )
}

export default SelectInput