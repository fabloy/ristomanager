
import React, { useEffect, useState } from "react";
import MsgAlert from "./MsgAlert";
import { useDispatch, useSelector } from "react-redux";
import { setOrdiniDaEvadere } from "../Store/StoreUser";
import { Ordine } from "../Model/Ordine";
import { cleanInput } from "../functions/cleanInput";

const FormNuovoOrdine=({nome, telefono, dataConsegna, descrizione, ingredientiPrincipali})=>{
    const dispatch = useDispatch()
    const {idOrd, nome:nomeOperatore}=useSelector(state=>state)
    //state locali:
    const [name, setName]=useState()
    const [orderNumber, setOrderNumber]=useState(idOrd)
    const [date, setDate]=useState()
    const [description, setDescription]=useState()
    const [ingredients, setIngredients]=useState()
    const [tel, setTel]=useState()
    const [view, setView]=useState()
    const [alert, setAlert]=useState()
    const [kindProduct, setKindProduct]= useState([{
      name:"Torta",
      price:20.00
    }, 
    {name:"Crostata",
     price:15.50
    },
    {
      name:"Salatini",
      price:7.30
    } 
    ])
    const [priceSelected, setPriceSelected] = useState("")
    const quantityList = [1,2,3,4,5,6,7,8,9,10]
    const [count, setCount]= useState("")
  
    let ordineGenerato
    const invioNuovoOrdine = (e)=>{
        e.preventDefault()
        if(name && date && description && tel.length===10){
         setOrderNumber(orderNumber+1)
         ordineGenerato = new Ordine(name, tel, description, ingredients, date, orderNumber)
         dispatch(setOrdiniDaEvadere({
            'nome':ordineGenerato.nome, 
            'ordine':ordineGenerato.id,
            'telefono':ordineGenerato.telefono,
            'data':ordineGenerato.data,
            'descrizione':ordineGenerato.descrizione,
            'ingredienti principali':ordineGenerato.ingredienti,
          }))
          setView(true)
          cleanInput()
        }
    }

    useEffect(()=>{
     setTimeout(()=>setView(false), 1500)
    },[orderNumber])

    return(
        <>
        <label>{nomeOperatore} stai inserendo un nuovo ordine</label>
        <form onSubmit={(e)=>invioNuovoOrdine(e)}>
            <h3>Nuovo Ordine n.{idOrd?.toString()}</h3>
            <div style={{display: nome?"block":"none"}}>
             <label>{nome}</label>
             <input 
              required 
              type="text"
              onChange={(e)=>setName(e.target.value)}
              >
             </input>
            </div>

            <div style={{display: telefono?"block":"none"}}>
             <label>{telefono}</label>
             <input 
              required 
              type="number"
              onChange={(e)=>{
               e.target.value.length!==10 ? setAlert("Numero di telefono non valido, deve essere composto da 10 cifre") : setAlert("")
               setTel(e.target.value)
            }}
              >
             </input>
            </div>
            
            <div>
            <label for="productKind">tipo di prodotto:</label>
             <select name="cars" id="productKind"
             onMouseUp={()=>{
              setPriceSelected(document.getElementById("productKind").value)
             }}>
              {
                kindProduct.map((product, index)=>{
                 return <option 
                  key={index} 
                  value={product.price}
                  >
                    {product.name}
                  </option>
                })
              }
             </select>
             <span>
             {` prezzo al kilo: ${priceSelected?.toString()} €`}
             </span>
            {
              priceSelected? <aside>
              <label
               for="quantity"
              >
               Quantità in Kg: 
              </label>
              <select
               id="quantity"
               type="number"
               onMouseUp={()=>setCount(priceSelected*document.getElementById("quantity").value)}
              >
                {
                quantityList.map((ql, index)=>{
                  return <option 
                  key={index}
                  >
                    {ql.toString()}
                  </option>
                })
              }
              </select>
             </aside>
             :
             <></>
            } 
            </div>

            <label>{descrizione}</label>
            <textarea 
             style={{display: descrizione?"block":"none"}}
             required
             onChange={(e)=>{setDescription(e.target.value)}}
             >
             </textarea>

            <label>{ingredientiPrincipali}</label>
            <textarea
             style={{display: ingredientiPrincipali?"block":"none"}}
             required
             onChange={(e)=>{setIngredients(e.target.value)}}>
             </textarea>

            <label>{dataConsegna}</label>
            <input 
             style={{display: dataConsegna?"block":"none"}}
             required
             type="date"
             onChange={(e)=>{setDate(e.target.value)}}
             >
             </input>
              <p>
                Totale:
                {count.toString()}
                $
              </p>
            <input 
             type="submit" 
             value="Ordina"
             >
            </input>
            <p style={{color:"red", fontSize:"1rem"}}>{alert}</p> 
        </form>
        {
            view? <MsgAlert 
            newOperator={orderNumber.toString()} 
            msg={`nuovo ordine aggiunto`}
            />
          :
            <></>
        }
      </>
    )
}

export default FormNuovoOrdine