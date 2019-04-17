import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Modal.css'

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