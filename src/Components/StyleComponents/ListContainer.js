import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faBars} from '@fortawesome/free-solid-svg-icons'

const ListContainer = ({logged, itemsLogged, itemsNotLogged,setShowAdv, showAdv})=>{
    return(
        
        <ul>
        <Link to={'/'}>
         <ListItem title="Home" />
        </Link>
        {logged? 
            itemsLogged.map((i)=>{
                console.log(i)
                return (
                    <>
                    <Link to={`/${i}`}>
                     <ListItem title={i} />
                    </Link>
                    <a>
                    <FontAwesomeIcon 
                      icon={faCircleInfo}
                      className={`pointer icon` }
                      onClick={()=>{
                      setShowAdv(!showAdv)
                      }}
                     />
                     </a>
                    </>
                )
            }
            )
         :
            itemsNotLogged.map((i)=>{
                return (
                    <Link to={`/${i}`}>
                     <ListItem title={i} />
                    </Link>
                )
            })
        
    }
        </ul>
        
    )
}

export default ListContainer