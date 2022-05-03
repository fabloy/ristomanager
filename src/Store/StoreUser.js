import { createSlice } from "@reduxjs/toolkit";

let id = 0
//state iniziale
const initialState = {
    logged:false,
    admin:false,
    nome:"",
    email:"",
    password:"",
    ordiniDaEvadere:[],
    ordiniEvasi:[],
    id,
    idOrd:0
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
        setOrdiniEvasi:(state,action)=>{
         state.ordiniEvasi=[...state.ordiniEvasi, ...action.payload]
        },
        setId:(state)=>{
         state.id+=1
        },
        setAdmin:(state,action)=>{
            state.admin=action.payload
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
    filtraOrdiniDaEvadere} = storeUser.actions