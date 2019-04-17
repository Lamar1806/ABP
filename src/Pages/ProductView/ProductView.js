import React, { Component } from 'react'
import styles from './ProductView.css';
import GetNumber from '../../Components/Modals/GetNumber/GetNumber'

import ThumbNailSelect from '../../Components/ThumbNailSelect/ThumbNailSelect'

export default class ProductView extends Component {
    state={
        options: ['Volvo','Saab','Fiat','Audi'],
        isModalVisable: false,
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
        return (
        <div className={styles.container}>
            <h3 className={styles.category}>Above Ground</h3>
            <h2 className={styles.title}>Item Name</h2>
            <ThumbNailSelect />
            <select className={styles.select} name="cars">
                <option value={'null'}>Select a Size:</option>
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
            />
        </div>
        )
    }
}
