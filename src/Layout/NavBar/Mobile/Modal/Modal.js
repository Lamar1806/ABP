import React, { Component } from 'react'
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
    let dropdown = this.state.productsIsVisable ? 'ion-md-arrow-dropup-circle'  : 'ion-md-arrow-dropdown-circle'
    if(this.props.isVisable === true){
      style1 = {display: 'block'}
    }
    if(this.state.productsIsVisable === true){
      style2 = {display: 'block'}
    }
    // style1 = {display: 'none'}
    return (
      <div className={styles.container} style={style1} >

        <div className={styles.backDrop} style={style1} onClick={()=>this.props.toggleModal()}></div>

        <div className={styles.innerContainer}>

          <i className={`icon ion-md-close-circle ${styles.closeIcon}`}  onClick={()=>this.props.toggleModal()}></i>

          <img className={styles.logo} src={logo} alt=""/>

          <a className={styles.number} href="tel:19189677008">CALL US TODAY!<br/>(918) 967-7008</a>

          <p className={styles.number}></p>

          <ul className={styles.outerUl}>
            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-home' link='/' text=' Home'/>
            
            
            <li onClick={()=>this.toggleProductsIsVisable()} ><i className={`icon ion-md-build ${styles.outerUlIcon}`}></i> Products <i className={`icon ${dropdown} ${styles.add}`}></i> </li>
            <ul className={styles.innerUl} style={style2} > 

              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/AboveGroundPools' text=' Above Ground Pools'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/InGroundPools' text=' In-Ground Pools'/>
              {/* <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/PoolToys' text=' Pool Toys'/> */}
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/FirePits' text=' Fire Pits'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Decks' text=' Decks'/>
              {/* <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Perola' text=' Perola'/> */}
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/Concrete' text=' Concrete'/>
              <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-hammer' link='/products/PoolChemicals' text=' Pool Chemicals'/>

            </ul>
            
            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-people' link='/About' text=' About Us'/>
            {/* <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-settings' link='/Service' text=' Service Department'/> */}

            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-book' link='/Brochure' text=' Get a Brochure'/>

            <MyLink toggleModal={this.props.toggleModal.bind(this)} icon='icon ion-md-mail' link='/Contact' text=' Get a Quote'/>

            <a className={styles.hfslink} 
              target="_blank" 
              href="https://www.hfsfinancial.net/promo/advancedpoolsandbackyardsOk">
              <i className={`icon ion-md-cash`}></i>&nbsp;Click for Financing!<br/>
              <img className={styles.hfsImg} src={"https://www.hfsfinancial.net/img/external/hfs_logo_red.png"} />
            </a>

          </ul> 
          
            <a  className={styles.directions}
              target="_blank" 
              href="https://www.google.com/maps/place/108+W+Main+St,+Stigler,+OK+74462/@35.2541425,-95.128805,17z/data=!3m1!4b1!4m5!3m4!1s0x87b58669676da891:0xe88c50ea08f64b90!8m2!3d35.2541425!4d-95.126611">
              <i className={`icon ion-md-car`}></i>&nbsp;Come On In!
            </a>

        </div>
      </div>
    )
  }
}
