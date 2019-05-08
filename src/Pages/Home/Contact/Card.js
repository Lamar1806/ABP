import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './Card.css'

export default class Card extends Component {
  render() {
    return (
      <Link to={{
                pathname:"/Contact",
                state:{
                  recipients: this.props.recipients,
                }
      }}>
        <div className={styles.container}>
          <i className={`${this.props.ionIconName} ${styles.icon}`}></i> 

          <div className={styles.textContainer}>
              <p className={styles.subText}>{this.props.subText}</p>

              <p className={styles.mainText}>{this.props.mainText}</p>
          </div>

        </div>
      </Link>
    )
  }
}
