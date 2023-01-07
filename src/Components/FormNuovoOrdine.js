
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrdiniDaEvadere } from "../Store/StoreUser";
import { Ordine } from "../Model/Ordine";
import { cleanInput } from "../functions/cleanInput";

import FormToCustom from "./FormToCustom";
import NameInput from "./MiniComponents/formComponents/NameInput"
import TelephoneInput from "./MiniComponents/formComponents/TelephoneInput"
import SelectInput from "./MiniComponents/formComponents/SelectInput";
import NumeberInput from "./MiniComponents/formComponents/NumberInput";
import TextAreaInput from "./MiniComponents/formComponents/TextAreaInput";
import DateInput from "./MiniComponents/formComponents/DateInput";
import Advisor from "../Components/StyleComponents/Advisor";
import TextElement from "./MiniComponents/TextElement"
import AlertElement from "./MiniComponents/AlertElement";
import { checkNome,checkDate, checkTel, checkEmail, checkPassword, checkProductSelected } from "../functions/checkValue";

const FormNuovoOrdine=({nome, telefono, dataConsegna, descrizione, ingredientiPrincipali})=>{
    const dispatch = useDispatch()
    const {idOrd, nome:nomeOperatore, ordiniDaEvadere, ordiniEvasi}=useSelector(state=>state)
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
    //state locali:
    const [name, setName]=useState()
    const [orderNumber, setOrderNumber]=useState(idOrd)
    const [date, setDate]=useState()
    const [description, setDescription]=useState()
    const [showAdv, setShowAdv] = useState(false)
    const [tel, setTel]=useState()
    const [view, setView]=useState()
    const [alert, setAlert]=useState()
    const [advText, setAdvText]=useState("")
    const [priceSelected, setPriceSelected] = useState("")
    const [nameProductSelected, setNameProductSelected] = useState()
    const [count, setCount]= useState("")
    const [quantity, setQuantity] = useState()
  
    let ordineGenerato
    const invioNuovoOrdine = (e)=>{
        e.preventDefault()
        if(name.length>3 && date && description && tel.length===10){
         setOrderNumber(orderNumber+1)
         ordineGenerato = new Ordine(name, tel, description,date,nameProductSelected,quantity, count, orderNumber)
         dispatch(setOrdiniDaEvadere({
          'nomeCliente':ordineGenerato.nomeCliente,
          'nomeProdotto':ordineGenerato.nomeProdotto,
          'id':ordineGenerato.id,
          'telefono':ordineGenerato.telefono,
          'data':ordineGenerato.data,
          'descrizione':ordineGenerato.descrizione,
          'quantita':ordineGenerato.quantita,
          'prezzo':ordineGenerato.prezzo
        }))
        setAdvText("Ordine inserito")
          setView(true)
         localStorage.setItem("ordiniDaEvadere",JSON.stringify([...ordiniDaEvadere, ordineGenerato]))
         localStorage.setItem("ordiniEvasi",JSON.stringify([...ordiniEvasi])) 
         setShowAdv(true)
         cleanInput()
         
        }else{
          console.log("error! form not sent", name,date, description,tel.length===10)
          setAdvText("ATTENZIONE ! compilare tutti i campi correttamente")
          setShowAdv(true)
        }
    }

   let productNameFun = ()=>{
    let product = kindProduct.filter((f)=>{
      return f.price===Number(priceSelected);
    })
    let productFind = product[0]
    return productFind?.name
    }
    const hide = (e)=>{
      setShowAdv(e)
    }

    useEffect(()=>{
     view && window.scroll(0, -document.body.offsetHeight)
     setTimeout(()=>setView(false), 3000)
     setNameProductSelected(productNameFun())
     },[view, priceSelected])
     
    return(
     
        <>
      {
            view? <AlertElement 
            variantSelected="success"
            text={`Ordine n.${orderNumber.toString()} aggiunto correttamente`}
            />
          :
            <></>
        }
      <FormToCustom
       triggerName="Invia ordine"
       submitFun={(e)=>{
        invioNuovoOrdine(e)
      
      }
      }
       input={[
              <h3>Ordine n.{idOrd?.toString()}</h3>,
              <NameInput 
               setName={(e)=>{
                setName(e.target.value)
                setAlert(checkNome(e.target.value))
              }}
              />,
              <TelephoneInput
               setTel={(e)=>{
                setTel(e.target.value)
                setAlert(checkTel(e.target.value))
                }}
              />,
              <SelectInput
               inputItems={kindProduct}
               itemSelectFun={(e)=>{
                setPriceSelected(e)
              }}
               setAlert={(e)=>setAlert(checkProductSelected(e,"","Prodotto non selezionato"))}
              />,
              <NumeberInput
              description="quantità"
              setValue={(e)=>{
                setCount(priceSelected*e)
                setAlert(e<=0? "inserisci quantità prodotto":"")
                setQuantity(e)
              }}
              />,
              <TextAreaInput
              description="inserisci descrizione prodotto"
              changeDescription={(e)=>{
                setDescription(e.target.value)
                setAlert(e.target.value.length<1? "inserisci descizione prodotto":"")}
              }
              />,
              <DateInput
              description="data di ritiro"
              setDate={(e)=>setDate(e.target.value)}
              ext={()=>checkDate(date)}
              />,
              <TextElement
              primaryText={count.toString()+"$"}
              secondaryText="Totale:"
              />,
              <p>{alert}</p>
             ]
            }
      >
      </FormToCustom>
      <Advisor
        title="Inserimento ordine" 
        text={advText}
        hide={(e)=>hide(e)} 
        showAdv={showAdv}    
      >
      </Advisor>
      </>
     
    )
    
}

export default FormNuovoOrdine