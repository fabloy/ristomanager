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
         let addOp = false;
         const shiftFound = state.shifts.filter(shift=>shift.id === action.payload.id)
         const operatorFound = shiftFound[0].operator.filter(op=>op.id === action.payload.operator[0].id)
         operatorFound.length > 0 ? addOp=false : addOp=true;
         
         const editOperatorFound = (array, opToCompare)=>{
          return array.map(op=> op.email === opToCompare.email ? op={...op, ...opToCompare} : op )
         }

         if(addOp){//aggiunta operatore nuovo in turno esistente
          state.shifts = state.shifts.map(shift=>{
           if(shift.id === shiftFound[0].id){
            return shift={...shift, operator: [...shift.operator, action.payload.operator[0]]}
           }else{
            return shift
           }
          }) 
         }else{//modifica operatore esistente in turno esistente
          state.shifts = state.shifts.map(shift=>{
            if(shift.id === shiftFound[0].id){
              return shift={...shift, operator: editOperatorFound(shift.operator, action.payload.operator[0])}
            }else{
              return shift
            }
          })
        }

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


