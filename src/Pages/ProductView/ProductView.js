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
        return this.state.options.map((e,index)=>{
            return <option key={index} value={e}>{e}</option>
        })
    }
    render() {
        // let productcat = this.props.location.pathname.split('/')[3];
        let productName = this.props.location.pathname.split('/')[3];

        return (
        <div className={styles.container}>
            <h3 className={styles.category}>Above Ground</h3>
            <h2 className={styles.title}>{productName}</h2>

            <ThumbNailSelect />
            
            <select className={styles.select} name="option" onChange={(e)=>this.change(e)} value={this.state.value}>
                {this.renderOptions()}
            </select>

            <p className={styles.descripion}>
                Contrary to popular belief, Lorem Ipsum is not 
                simply random text. It has roots in a piece of 
                classical Latin literature from 45 BC, making 
                it over 2000 years old. Richard McClintock, a 
                Latin professor at Hampden-Sydney College in 
                Virginia, looked up one of the more obscure 
                Latin words, consectetur, from a Lorem Ipsum 
                passage, and going through the cites of the 
                word in classical literature, discovered the 
                undoubtable source.
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
