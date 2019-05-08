import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './Hero.css'
import hero from './img/Hero.png'
export default class Hero extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img  className={styles.hero} src={hero} alt=""/>

        <div className={styles.innerContainer}>
          <h1 className={styles.h1}>
            Advanced Pools and Backyards
          </h1> 

          <div className={styles.ctaContainer}>

            <p className={styles.ctaTxt}>
              We handle all backyard needs  
              at a backyard near you!
            </p>

            <Link to='contact' className={styles.pillBtn}>
              Get A Quote 
            </Link>
          </div>


        </div>    
            
      </div>
    )
  } 
}
