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
    operatoriAggiunti:[{ nome:"Mario",
        email:"fabio@gloty.it",
        password:"ASDad121!&&%",
        id:1,
        ordiniDaEvadere:[],
        ordiniEvasi:[]},
        { nome:"Filomeno",
        email:"filo@gloty.it",
        password:"ASrr5!2121!&&%",
        id:2,
        ordiniDaEvadere:[],
        ordiniEvasi:[]}],
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
        },
        setAggiungiOperatore:(state, action)=>{
            state.operatoriAggiunti=[...state.operatoriAggiunti, action.payload]
        },
        setShifts:(state,action)=>{
            state.shifts && state.shifts.map(el=>{
               return el.id===action.id ? el = {...action} : el = el
            })
           state.shifts=[...state.shifts, action.payload]
        },
        editShift:(state,action)=>{
         let addOp=false;
         let opToAdd = state.shifts.map(shift=>{
            return shift.id===action.payload.id ? shift={...shift, operator: [...shift.operator.map(op=>{
                if(op.email===action.payload.operator[0].email){
                  addOp=false
                  return op={...op, ...action.payload.operator[0]}
                }else{
                  let esixtingOp = state.shifts.map(shift =>{
                  return shift.id===action.payload.id ? shift.operator.filter(op=>{
                    return op.email===action.payload.operator[0].email
                    }) : []
                  })
                  esixtingOp=esixtingOp[0]//
                  esixtingOp.length>0 ? addOp=false : addOp = true
                  return action.payload.operator[0]
                } 
            })]
            } : shift} 
        )
        state.shifts = state.shifts.map(shift=>{
          if(shift.id === opToAdd[0].id && !addOp){//
            console.log("if", shift, opToAdd[0].id, shift.id)
           return shift={...shift, operator:[...shift.operator.map(op=> op.email===opToAdd[0].operator[0].email ? op={...op, ...opToAdd[0].operator[0]} : op=op)]}
          }else if(shift.id === opToAdd[0].id && addOp){
            console.log("else if")
            return shift={...shift, operator:[...shift.operator, opToAdd[0].operator[0]]}
          }else{
            console.log("else",addOp, opToAdd[0].id, shift.id)
            return shift
          }
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


