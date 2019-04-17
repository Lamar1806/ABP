import React, { Component } from 'react'
import styles from './NotFound.css'
import brokenRobot from './img/brokenRobot.jpg'

export default class NotFound extends Component {
  render() {
      
    return (
      <div className={styles.container}>
        <img className={styles.img} src={brokenRobot} alt=""/> 
        <h3 className={styles.h3}>Oops page not found!</h3>
      </div> 
    )
  }
}
