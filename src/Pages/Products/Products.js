import React, { Component } from 'react'

import styles from './Products.css'
import Card from './Card.js'
import img from './img/img.png'


export default class Products extends Component {
    state={
        pools:
        [            
            {
                title:'Pool 1',
                img: img
            },
            {
                title:'Pool 2',
                img: img 
            },           
        ]
    }

    renderCards(category){
        let array = [];

        switch (category){
            case 'pools':
                array = [...this.state.pools]
                break;
            default:
                console.log('Category not found')
                break;
        }
        
        return array.map((e)=>{
            return (
                <Card
                title={e.title}
                img={e.img}
                location = {this.props.location}
            /> 
            )
        })
    }
    render() {
        
        return (
        <a href="title/">
            <div className={styles.container}>
                <h2 className={styles.h2}>Product Category</h2>
                <h3 className={styles.h3}>Above Ground Pools</h3>

                {this.renderCards('pools')}          

            </div>
        </a>
        )
    }
}
