import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './Card.css'

export default class Card extends Component {
  render() {
    return (     
      <a href={this.props.link}>
      <div className={styles.container}>
            <p className={styles.title}>{this.props.title}</p>
            <img className={styles.img} src={this.props.img} alt={this.props.alt}/>
      </div>
      </a>
    )
  }
}
