import FormToCustom from "./FormToCustom";
import NameInput from "./MiniComponents/formComponents/NameInput"
import TelephoneInput from "./MiniComponents/formComponents/TelephoneInput"
import NumeberInput from "./MiniComponents/formComponents/NumberInput";
import TextAreaInput from "./MiniComponents/formComponents/TextAreaInput";
import DateInput from "./MiniComponents/formComponents/DateInput";
import TextElement from "./MiniComponents/TextElement"
import SelectInput from "./MiniComponents/formComponents/SelectInput";
import Advisor from "./StyleComponents/Advisor";
import { useEffect, useCallback} from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editOrdiniDaEvadere } from "../Store/StoreUser";
import { checkNome } from "../functions/checkValue";
import { removeRequired, manageSelectHTML } from "../functions/fillEmptyField";


const EditOrder = ({nOrder})=>{
 const dispatch = useDispatch()
 const {ordiniDaEvadere} = useSelector(state=>state)

 let orderFind = ordiniDaEvadere.filter((ord)=>ord.ordine===nOrder)
 orderFind=orderFind[0]
 const [ordToEdit, setOrdToEdit] = useState(orderFind)
 const [name, setName] = useState(ordToEdit.nomeCliente)
 const [tel, setTel] = useState(ordToEdit.telefono)
 const [quantity, setQuantity] = useState(ordToEdit.quantita)
 const [description, setDescription] = useState(ordToEdit.descrizione)
 const [dateSelected, setDateSelected] = useState(ordToEdit.data)
 const [count, setCount]= useState(ordToEdit.prezzo)
 const [priceSelected, setPriceSelected] = useState(count/quantity)
 const [nameProduct, setNameProduct] = useState(orderFind.nomeProdotto)
 const [showAdv, setShowAdv] = useState(false)
 const kindProduct=[{
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
]

const defineProductName = ()=>{
  let productFind = kindProduct.filter(product=>product.price === priceSelected)
  if(productFind[0]===undefined){
    return nameProduct
   }
   console.log("defineproduct")
  return productFind[0]?.name
}
 
 const switchCount = ()=>{
  if(isNaN(count)||count===null){
   let newPrice = (ordToEdit.prezzo/ordToEdit.quantita)*quantity
   setCount(newPrice)
  }
 }
 

 useEffect(()=>{
  removeRequired()
  manageSelectHTML(count, quantity)
  switchCount()
},[showAdv, name,tel, quantity, description, dateSelected,priceSelected,count])

const hide = (e)=>{
  console.log("hide")
  setShowAdv(e)
}

 return(
       <>
       
      <FormToCustom
       triggerName="Invia ordine"
       submitFun={(e)=>{
        e.preventDefault()
        defineProductName()
        dispatch(editOrdiniDaEvadere(
          {
            ...ordToEdit, 
            nomeCliente: name ,
            nomeProdotto: defineProductName(),
            telefono:tel,
            descrizione:description,
            quantita:quantity,
            prezzo:count
          }
        ))
        setShowAdv(true)
      }
      }
       input={[
              <h3>Modifica Ordine n.{nOrder}</h3>,
              <NameInput 
               val={ordToEdit?.nomeCliente}
               setName={(e)=>{
                setName(e.target.value)
               }}
              />,
              <TelephoneInput
               val={ordToEdit.telefono}
               setTel={(e)=>{
                setTel(e.target.value)
               }
              }
              />,
              <SelectInput
               inputItems={kindProduct}
               itemSelectFun={(e)=>{
                setPriceSelected(Number(e))
                setCount(Number(e)*quantity)
              }}
              
              />,
              <NumeberInput
              val={ordToEdit?.quantita}
              description="quantità"
              setValue={(e)=>{
                setQuantity(Number(e))
                setCount(Number(priceSelected)*e)
               }}
             />,
              <TextAreaInput
              val={ordToEdit.descrizione}
              changeDescription={(e)=>{
                setDescription(e.target.value)
              }}
             />,
              <DateInput
              description="data di ritiro"
              setDate={(e)=>setDateSelected(e)}
              />,
              <TextElement
              primaryText={count+"$"}
              secondaryText="Totale:"
              />
             ]
            }
            
      >
      </FormToCustom>
      <Advisor
        title="Modifica ordine" 
        text="Ordine modificato correttamente"
        hide={(e)=>hide(e)} 
        showAdv={showAdv}    
      >
      </Advisor>
      </>
    )
}

export default EditOrder