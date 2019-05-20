import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Card.css'

export default class Card extends Component {
  render() {    
    return (
      <Link to={
          {
            pathname:`${this.props.location.pathname}/${this.props.title}`, 
            state:
            {
              imgs: this.props.imgs, 
              options: this.props.options, 
              description: this.props.description
            }
          }
      }>
      <div className={styles.container}>        
        <h4 className={styles.h4}>{this.props.title}</h4>
        <img className={styles.img} src={this.props.img} alt=""/>
      </div>
      </Link>
    )
  }
}
 