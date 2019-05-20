import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavBar.css'
import Modal from './Modal/Modal'

export default class NavBar extends Component {
  state={
    isVisable: false,
  }

  toggleIsVisable(){
    this.setState({isVisable: !this.state.isVisable})
  }

  render() {
    return (      
      <React.Fragment>
      <div className={styles.container}>      

        <p className={styles.navTxt}><Link to='/'> APB Menu</Link></p>

        <a className={styles.navLink} target={'_blank'} href="https://www.google.com/maps/place/108+W+Main+St,+Stigler,+OK+74462/@35.2541425,-95.128805,17z/data=!3m1!4b1!4m5!3m4!1s0x87b58669676da891:0xe88c50ea08f64b90!8m2!3d35.2541425!4d-95.126611">
            <i className={`icon ion-md-map`}></i>&nbsp;
            Stigler, Ok
        </a>
        
        <i className={`icon ion-md-menu ${styles.menuIcon}`} onClick={()=>this.toggleIsVisable()}></i>       
        

      </div>

      <Modal isVisable={this.state.isVisable} toggleModal={this.toggleIsVisable.bind(this)}/>

      </React.Fragment>
     
    )
  } 
} 
