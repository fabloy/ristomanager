import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const ListItem=({title})=>{
    
    return(
        <li>{title}</li>
    )
}

export default ListItem