import React, { Component } from 'react'
import styles from './contact.css'

export default class contact extends Component {
  render() {
    return (
      <form className={styles.container} >
          <h2 className={styles.h2}>Contact Us</h2>
          <input className={styles.email} type="text" placeholder='Email' value=''/>
          <input className={styles.subject} type="text" placeholder='Subject' value=''/>
          <textarea className={styles.body} placeholder='Your Conserns' name="body" id="" rows="20"></textarea>
          <input className={styles.submit} type="submit" value='Submit'/>
      </form>
    )
  }
}
