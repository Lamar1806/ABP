import React, { Component } from 'react'
import styles from './Services.css'
import Card from './Card'

import kitchen from './img/outDoorKitchen.png'
import abovegroundpool from './img/abovegroundpool.jpg'
import ingroundpool from './img/ingroundpool.jpg'
import poolchemicals from './img/poolchemicals.jpg'
import deck from './img/deck2.jpg'
import concrete from './img/concrete.jpg'


export default class Services extends Component {
    state = {
        cards: [
            {
                title:'Above Ground Pools',
                img: abovegroundpool,
                alt:'Kitchen Image',
                link:'/Products/AboveGroundPools'
            },
            {
                title:'In Ground Pools',
                img: ingroundpool,
                alt:'Kitchen Image',
                link:'/Products/InGroundPools'
            },
            // {
            //     title:'Pool Toys',
            //     img: kitchen,
            //     alt:'Kitchen Image',
            //     link:'/Products/PoolToys'
            // },
            {
                title:'Fire Pits',
                img: kitchen,
                alt:'Kitchen Image',
                link:'/Products/FirePits'
            },
            {
                title:'Decks',
                img: deck,
                alt:'Kitchen Image',
                link:'/Products/Decks'
            },
            {
                title:'Concrete',
                img: concrete,
                alt:'Kitchen Image',
                link:'/Products/Concrete'
            },
            {
                title:'Pool Chemicals',
                img: poolchemicals,
                alt:'Kitchen Image',
                link:'/Products/PoolChemicals'
            },
        ]
    }

    renderCards(){
        return this.state.cards.map((e,index)=>{
            return (                
                <Card 
                    key={index}
                    title={e.title}
                    img={e.img}
                    alt={e.alt}
                    link={e.link}
                />
            )
        })
    }
    
    render() {
        return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Our Products</h2>    
            <div className={styles.cardContainer}>
                {this.renderCards()}
            </div>  
        </div>
        )
    }
}
