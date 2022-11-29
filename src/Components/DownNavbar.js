import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import DownNavbarCSS from "./StyleComponents/DownNavbar.module.css"

const DownNavbar = ()=>{
    return(
        <nav className={DownNavbarCSS.nav}>
            <ul>
                <Link to={"/"}> 
                 <li className={DownNavbarCSS.iconWrapper}>
                 <FontAwesomeIcon icon={faHouse} />
                 </li>
                </Link>
            </ul>
        </nav>
    )
}
export default DownNavbar