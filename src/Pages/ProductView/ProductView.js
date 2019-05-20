import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './ProductView.css';
import GetNumber from '../../Components/Modals/GetNumber/GetNumber'

import ThumbNailSelect from '../../Components/ThumbNailSelect/ThumbNailSelect'

export default class ProductView extends Component {
    state={
        options: ['Select a Size:','Volvo','Saab','Fiat','Audi'],
        value: 'Select a Size:',
        isModalVisable: false,
    }

    change = (event) => {
        this.setState({value: event.target.value});
    }
    toggleModal(){
        this.setState({isModalVisable: !this.state.isModalVisable});
    }
    renderOptions(){
        if(!this.props.location.state.options){
            return;
        }
        let options = this.props.location.state.options.map((e,index)=>{
            return <option key={index} value={e}>{e}</option>
        })
        if(options.length === 0){
            return;
        }
        return(
            <select className={styles.select} name="option" onChange={(e)=>this.change(e)} value={this.state.value}>
               {options}
            </select>
        )
    }
    render() {
        // let productcat = this.props.location.pathname.split('/')[3];
        let productName = this.props.location.pathname.split('/')[3];
        console.log(productName);
        if(productName == 'Outdoor Kitchens '){
            productName = this.props.location.state.title;
        }
        
        // console.log(this.props.location.state.imgs)
        return (
        <div className={styles.container}>
            {/* <h3 className={styles.category}>Above Ground</h3> */}
            <h2 className={styles.title}>{productName}</h2>

            <ThumbNailSelect imgs={this.props.location.state.imgs}/>
            
           
            {this.renderOptions()}
            

            <p className={styles.descripion}>
                
                <span dangerouslySetInnerHTML={{__html:this.props.location.state.description}} />
            </p>
        
            <span className={styles.btn} onClick={()=>this.toggleModal()}>Get a Quote</span>

            <GetNumber 
                toggleModal={this.toggleModal.bind(this)} 
                isModalVisable={this.state.isModalVisable}
                option={this.state.value}
                item={this.props.location.pathname.split('/')[3]}
            />

        </div>
        )
    }
}
