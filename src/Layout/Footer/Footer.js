import React, { Component } from 'react'
import styles from './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.txt}>Advanced Pools <br/> and Backyards</p>

        <ul className={styles.linkContainer}>        
          <a href="https://www.facebook.com/pg/AdvancedPoolsandBackyardsllc/photos/?ref=page_internal">
            <li className={styles.li}><i className={`icon ion-logo-facebook ${styles.icon}`}></i></li>
          </a>
          <li className={styles.li}><i className={`icon ion-logo-twitter ${styles.icon}`}></i></li>
          <li className={styles.li}><i className={`icon ion-logo-instagram ${styles.icon}`}></i></li>
        </ul>

      </div>
    )
  }
}
