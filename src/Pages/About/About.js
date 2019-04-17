import React, { Component } from 'react'
import styles from './About.css'
import hero from './img/hero.png'
import subPic from './img/subPic.png'
import Reviews from '../../Components/Reviews/Reviews'

export default class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.hero} src={hero} alt=""/> 
        <h2 className={styles.h2}>About Us</h2>
        <p className={styles.p}>
        It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking 
        at its layout. The point of using Lorem Ipsum is that it has 
        a more-or-less normal distribution of letters, as opposed to 
        using 'Content here, content here', making it look like 
        readable English.
        </p>        
        <img className={styles.subPic} src={subPic} alt=""/>
        <Reviews />
      </div>
    ) 
  }
}
