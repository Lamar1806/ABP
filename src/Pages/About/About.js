import React, { Component } from 'react'
import styles from './About.css'
// import hero from './img/hero.png'
import subPic from './img/subPic.png'
import MapWithGeoPoint from '../../Components/MapWithGeoPoint/MapWithGeoPoint'
import Reviews from '../../Components/Reviews/Reviews'

export default class About extends Component {
  render() {
    window.scroll(0,0)
    let address = `108 W Main Street <br/>
                        Stigler, Oklahoma`;
    return (
      <div className={styles.container}>
        {/* <img className={styles.hero} src={hero} alt=""/>  */}
        <h2 className={styles.h2}>About Us</h2>
        <p className={styles.p}>
        Our goal is to help you by 
        Providing chemicals, servicing and construction of both in-ground 
        and above-ground pools! As well as any other backyard entertainment 
        construction needs!
        </p>  
        <p className={styles.infoContainer}>
          <a target={'_blank'} href="https://www.google.com/maps/place/108+W+Main+St,+Stigler,+OK+74462/@35.2541425,-95.128805,17z/data=!3m1!4b1!4m5!3m4!1s0x87b58669676da891:0xe88c50ea08f64b90!8m2!3d35.2541425!4d-95.126611">
            <i className={`icon ion-md-map`}></i>&nbsp;
            108 W Main Street<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stigler, Oklahoma
          </a>
          <br /><br />
          <i className={`icon ion-md-call`} ></i>&nbsp;&nbsp;
          <a className={styles.number} href="tel:19189677008">(918) 967-7008</a>
        </p>
        <br />        
        <MapWithGeoPoint />
        <br />
        <Reviews />
      </div>
    ) 
  }
}
