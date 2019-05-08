import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './Products.css'
import Card from './Card.js'
import img from './img/img.png'
import century from './img/century.jpg'
import westport from './img/westport.jpg'
import sterling from './img/sterling.jpg'
import riviera from './img/riviera.jpg'

import MyLink from '../../Layout/NavBar/Mobile/Modal/MyLink'


export default class Products extends Component {
    constructor(props){
        super(props);
        
    }
    state={
        selectedCategory: this.props.location.pathname.split('/')[2],
        AboveGroundPools:
        [            
            {
                title:'Century',
                img: century
            },
            {
                title:'Westport',
                img: westport 
            },  
            {
                title:'Sterling',
                img: sterling 
            },  
            {
                title:'Riviera',
                img: riviera 
            },           
        ]
    }

    componentDidMount(){
        let selectedCategory = this.props.location.pathname.split('/')[2];

    }

    renderOptions(){
        let productUrls=[
            'AboveGroundPools',
            'InGroundPools',
            'FirePits',
            'Decks',
            'Perola',
            'Concrete',
            'PoolChemicals',
        ]
        return productUrls.map((p, i)=>{
            let displayTxt = ''
            let index = 0;
            for(let char of p){
                if(index != 0 && char == char.toUpperCase()){
                    displayTxt += ' ' + char;
                }else{
                    displayTxt += char;
                }
                console.log(char);
                index ++;
            }
            return <option key={i} value={p}>{displayTxt}</option>
        })
    }

    renderCards(category){
        let array = [];

        switch (category){
            case 'AboveGroundPools':
                array = [...this.state.AboveGroundPools]
                break;
            case 'InGroundPools':
                array = [...this.state.AboveGroundPools]
                break;
            case 'FirePits':
                array = [...this.state.AboveGroundPools]
                break;
            case 'Decks':
                array = [...this.state.AboveGroundPools]
                break;
            case 'Perola':
                array = [...this.state.AboveGroundPools]
                break;
            case 'Perola':
                array = [...this.state.AboveGroundPools]
                break;
            default:
                console.log('Category not found')
                break;
        }
        
        return array.map((e,index)=>{
            return (
                <Card
                key={index}
                title={e.title}
                img={e.img}
                location = {this.props.location}
            /> 
            )
        })
    }
    categoryChange(){

    }

    render() {
        let category = this.props.location.pathname.split('/')[2]
        let header = '';
        let index = 0;
        for(let char of category){
            if(char == char.toUpperCase() && index != 0){
                header += ' ' + char
            }else{
                header += char
            }                
            index++;
        }
        return (        
            <div className={styles.container}>
                {/* <h2 className={styles.h2}>Product Category</h2> */}
                
                <h2 className={styles.h2}>{header}</h2>

                {/* <select onChange={this.categoryChange} value={this.state.selectedCategory}>
                    <option value=''>Select a Category</option>
                    {this.renderOptions()}
                </select> */}

                {this.renderCards(category)}          

            </div>        
        )
    }
}
