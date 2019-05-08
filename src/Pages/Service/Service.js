import React, { Component } from 'react'
import styles from './Services.css'
import hero from './img/bg.png'
export default class Service extends Component {
    state={
        options: ["Can't start pool?",'Saab','Fiat','Audi'],
        value: "Can't start pool?",
    }
    change = (event) => {
        this.setState({value: event.target.value});
    }
    renderOptions(){
        return this.state.options.map((e,index)=>{
            return <option key={index} value={e}>{e}</option>
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.imgContainer}>

                    <img className={styles.img} src={hero} alt=""/>

                    <h1 className={styles.h1}>Service Department</h1>
                    <div className={styles.imgTxtContainer}>
                        <p className={styles.p1}>Need help?</p>
                        <p className={styles.p2}>Well you've come to the right place!</p>
                    </div>              
                
                </div>

                <select className={styles.select} name="option" onChange={(e)=>this.change(e)} value={this.state.value}>
                    {this.renderOptions()}
                </select>
                
                <p className={styles.p3}>Can't Find a Selection?</p>
                <a href="/Contact" className={styles.btn}>Contact Us!</a>
            </div>
        )
    }
}
