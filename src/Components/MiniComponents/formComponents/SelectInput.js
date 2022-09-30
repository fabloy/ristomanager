import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const SelectInput = ({inputItems, itemSelectFun})=>{

    return(<>
      <label for="listItemBox">tipo di prodotto:</label>
      <Form.Select 
       aria-label="Default select example"
       id="listItemBox"
       onChange={()=>itemSelectFun(document.getElementById("listItemBox").value)}
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