import React, { Component } from 'react'
import styles from './card.css'
import profileImg from './img/profile.png';

import back from './img/back.png'
import forward from './img/forward.png'

export default class card extends Component {
  
  render() {
    return (
      <div className={styles.container}>
         <img className={styles.profileImg} src={this.props.image} alt=""/>     
            {/* <div className={styles.innerContainer}> */}

                <img className={styles.back} src={back} alt="" onClick={()=>this.props.back()}/>
                <img className={styles.forward} src={forward} alt="" onClick={()=>this.props.next()}/>

                <p className={styles.reviewText}>
                    <i className={`icon ion-md-quote ${styles.quoteStart}`}></i>
                    {this.props.text}
                    <i className={`icon ion-md-quote ${styles.quoteEnd}`}></i>
                </p>   

            {/* </div> */}
      </div>
    ) 
  }
}
