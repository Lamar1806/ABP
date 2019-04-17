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

        <i className={`icon ion-md-menu ${styles.menuIcon}`} onClick={()=>this.toggleIsVisable()}></i>       
        

      </div>

      <Modal isVisable={this.state.isVisable} toggleModal={this.toggleIsVisable.bind(this)}/>

      </React.Fragment>
     
    )
  } 
} 
