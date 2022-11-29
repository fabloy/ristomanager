
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registrazione from './Components/Registrazione';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import FormLogin from './Components/FormLogin';
import Logout from './Components/Logout';
import Dashboard from './Components/Dashboard';
import OrdineDettaglio from './Components/OrdineDettaglio';

import { Route } from 'react-router';
import { BrowserRouter, Routes} from 'react-router-dom';
import {setLogged} from '../src/Store/StoreUser'
import { useDispatch, useSelector } from 'react-redux';
import FormNuovoOrdine from './Components/FormNuovoOrdine';
import FormRegistrazione from './Components/FormRegistrazione';
import FormNewOperator from './Components/FormNewOperator';
import Advisor from './Components/StyleComponents/Advisor';
import DownNavbar from './Components/DownNavbar';



function App() {
 const {logged, ordiniDaEvadere}=useSelector(state=>state)
 
 return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar logged={logged}/>
       <Routes>
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/" element={<Home logged={logged}/>} />
        <Route path="/login" element={<FormLogin/>} />
        <Route path="/logout" element={
          <Logout 
           logged={logged}
           />
          }/>

          <Route path="/inserisciordine" element={
           <FormNuovoOrdine 
            nome="Nome cliente"
            descrizione="descrizione"
            ingredientiPrincipali="ingredienti Principali"
            dataConsegna="data consegna"
            telefono="telefono"
            />
          }/>

          <Route path="/ordine/:id" element={
           <OrdineDettaglio
            />
          }/>

          <Route path="/evadiOrdine" element={
           <Dashboard
            elenco={ordiniDaEvadere}
            input="evadi"
           />
          }/>

          <Route path="/new-operator/:created" element={
           <FormNewOperator/>
          }/> 
  
       </Routes>
       <DownNavbar></DownNavbar>
      </BrowserRouter>

    </div>
  );
}

export default App;
