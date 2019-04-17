import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyLink from './MyLink'
 
import styles from './Modal.css'
import logo from './img/logo.png'

export default class Modal extends Component {
  state={
    productsIsVisable: false
  }
  toggleProductsIsVisable = ()=>{
    this.setState({productsIsVisable: !this.state.productsIsVisable});
  }
  render() {
    let style1 = null;
    let style2 = null;
    if(this.props.isVisable === true){
      style1 = {display: 'block'}
    }
    if(this.state.productsIsVisable === true){
      style2 = {display: 'block'}
    }
    // style1 = {display: 'none'}
    return (
      <div className={styles.container} style={style1}>
        <div className={styles.innerContainer}>

          <i className={`icon ion-md-close-circle ${styles.closeIcon}`}  onClick={()=>this.props.toggleModal()}></i>

          <img className={styles.logo} src={logo} alt=""/>

          <a className={styles.p1} href="tel:19189677008">CALL US TODAY!<br/>(918) 967-7008</a> 
          <p className={styles.number}></p>
          <ul className={styles.outerUl}>
            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-home' link='/' text=' Home'/>
            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-people' link='/About' text=' About Us'/>
            
            <li onClick={()=>this.toggleProductsIsVisable()} ><i className={`icon ion-md-build ${styles.outerUlIcon}`}></i> Products <i className={`icon ion-md-arrow-dropdown-circle ${styles.add}`}></i> </li>
            <ul className={styles.innerUl} style={style2} > 

              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/AboveGroundPools' text=' Above Ground Pools'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/InGroundPools' text=' In-Ground Pools'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/PoolChemicals' text=' Pool Chemicals'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/PoolToys' text=' Pool Toys'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/FirePits' text=' Fire Pits'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Perola' text=' Perola'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Decks' text=' Decks'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Concrete' text=' Concrete'/>

            </ul>
            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-settings' link='/Service' text=' Service Department'/>

            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-mail' link='/Contact' text=' Get a Quote'/>
          
          </ul> 

        </div>
      </div>
    )
  }
}
