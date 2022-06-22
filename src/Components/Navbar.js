import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'


const Navbar = ({logged})=>{
    return(
        <nav>
        <h1>
          Ristomanager
        </h1>
       
        
        
        <ul>
          <Link to={'/'}>
           <li>Home</li>
          </Link>
          {logged?
          <Link to={'/logout'}>
           <li>logout</li>
          </Link>
          :
          <>
          <Link to={'/registrazione'}>
           <li>Registrazione</li>
          </Link>
          <Link to={'/login'}>
           <li>login</li>
          </Link>
          </>
          }
          
        </ul>
        
        <FontAwesomeIcon icon={faCircleInfo}/>
       
      </nav>
    )
}

export default Navbar
