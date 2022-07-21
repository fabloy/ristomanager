import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faBars} from '@fortawesome/free-solid-svg-icons'
import ListContainer from "./StyleComponents/ListContainer"
import NavbarCSS from "./StyleComponents/Navbar.module.css"
import Advisor from "./StyleComponents/Advisor"
import { showMenu } from "../functions/showMenu"


const Navbar = ({logged})=>{
  let itemsLogged = ["logout"]
  let itemsNotLogged = ["registrazione","login"]
  const [showAdv, setShowAdv] = useState(false)
  const [openOrClose, setOpenOrClose] = useState(false)

  useEffect(()=>{
    showAdv ? document.querySelector("article").style.maxHeight="5rem" : document.querySelector("article").style.maxHeight="0"
  showAdv ? document.getElementById("blurElement").style.display="block" :  document.getElementById("blurElement").style.display="none" 
  },[showAdv])
    return(
        <nav className={NavbarCSS.nav}>
        
        <h1>
          Ristomanager
        </h1>
        <FontAwesomeIcon 
         icon={faBars}
         className={NavbarCSS.hamburger}
         onClick={()=>{
          setOpenOrClose(!openOrClose)
          showMenu(openOrClose)
        }}
         />
         <section 
          id={NavbarCSS.menuSection}
          className="menuSection"
          >
          <ListContainer 
           logged={logged}
           itemsLogged={itemsLogged}
           itemsNotLogged={itemsNotLogged}
          />
          <aside>
           <FontAwesomeIcon 
            icon={faCircleInfo}
            className={`pointer icon` }
            onClick={()=>setShowAdv(!showAdv)}
            />
           </aside>
           
          </section>

          {/* da sistemare: */}
          <div id="blurElement">
          <Advisor title="Info" text={`Benvenuto su Ristomanager, il gestionale che ti permetterà di gestire al meglio i tuoi clienti,
           gli ordini e il tuo team`}/>
          </div>
      </nav>
    )
}

export default Navbar
