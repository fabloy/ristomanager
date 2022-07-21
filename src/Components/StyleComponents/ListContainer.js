import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const ListContainer = ({logged, itemsLogged, itemsNotLogged})=>{
    return(
        
        <ul>
        <Link to={'/'}>
           <ListItem title="Home" />
          </Link>
       {logged? 
            itemsLogged.map((i)=>{
                return (
                    <Link to={`/${i}`}>
                     <ListItem title={i} />
                    </Link>
                )
            })
        
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