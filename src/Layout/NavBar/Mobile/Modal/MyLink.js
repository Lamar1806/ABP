import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let MyLink = (props)=>{    
    return(
        <li> 
            <i className={`${props.icon}`}></i> 
            <Link 
                onClick={()=>props.toggleModal()} 
                to={{pathname:`${props.link}`}}
            >
                {props.text}
            </Link> 
        </li>
    )
}

export default MyLink