import { createSlice, current } from "@reduxjs/toolkit";
//Creare nel initialstate un oggetto padre 
//Al suo interno creare state dipendentiAdmin:[], dipendentiOperatori:[], ordiniDaEvadere:[], ordiniEvasi:[]


let id = 0
//state iniziale
const initialState = {
    logged:false,
    admin:localStorage.admin? JSON.parse(localStorage.admin) : "",
    nome:"",
    email:"",
    password:"",
    ordiniDaEvadere:[],
    ordiniEvasi:[],
    operatoriAggiunti:[],
    shifts:[],
    id,
    idOrd:1
}

//reducer + actions
const storeUser=createSlice({
    name:"storeUser",
    initialState:initialState,
    reducers:{
        setLogged:(state, action)=>{
         state.logged=action.payload
        },
        setNome:(state, action)=>{
         state.nome=action.payload
        //  console.log(action, "payload")
        },
        setEmail:(state,action)=>{
         state.email=action.payload
        },
        setPassword:(state,action)=>{
         state.password=action.payload
        },
        setOrdiniDaEvadere:(state,action)=>{
         state.ordiniDaEvadere= [...state.ordiniDaEvadere, action.payload]
         state.idOrd+=1
        },
        filtraOrdiniDaEvadere:(state,action)=>{
         state.ordiniDaEvadere=action.payload
        },
        editOrdiniDaEvadere:(state, action)=>{
        state.ordiniDaEvadere = state.ordiniDaEvadere.map((ord)=>{
               return ord.id === action.payload.id? ord={...ord, ...action.payload} : ord = ord
              })
        },
        deleteOrdiniDaEvadere:(state, action)=>{
          let newArray = state.ordiniDaEvadere.filter((ord)=>ord.id!==action.payload.id)
           state.ordiniDaEvadere = newArray
        },
        setOrdiniEvasi:(state,action)=>{
         state.ordiniEvasi=[...state.ordiniEvasi, ...action.payload]
        },
        setId:(state)=>{
         state.id+=1
        },
        setAdmin:(state,action)=>{
            state.admin=action.payload
            console.log(action.payload)
        },
        setAggiungiOperatore:(state, action)=>{
            console.log(action.payload)
            state.operatoriAggiunti=[...state.operatoriAggiunti, action.payload]
        },
        setShifts:(state,action)=>{
            state.shifts && state.shifts.map(el=>{
               return el.id===action.id ? el = {...action} : el = el
            })
            console.log(action.payload)
          state.shifts=[...state.shifts, action.payload]
        },
        editShift:(state,action)=>{
            // state.shifts[0] = {...action.payload}
         state.shifts.map(el=>{
           return el.id===action.payload.id ? el={...action.payload} : el=el
            })
        }
    }
})

const {reducer} = storeUser
export default reducer

//export di tutte le azioni:
export const {
    setLogged,
    setNome, 
    setEmail, 
    setPassword, 
    setId,
    setAdmin, 
    setOrdiniDaEvadere, 
    setOrdiniEvasi,
    editOrdiniDaEvadere,
    deleteOrdiniDaEvadere,
    filtraOrdiniDaEvadere,
    setAggiungiOperatore,
    setShifts,
    editShift
    } = storeUser.actions


