import React, { Component } from 'react'
import styles from './Services.css'
import Card from './Card'

import kitchen from './img/outDoorKitchen.png'

export default class Services extends Component {
    state = {
        cards: [
            {
                title:'Out Door Kitchen 1',
                img: kitchen,
                alt:'Kitchen Image',
                link:'/Products/AboveGroundPools/kitch'
            },
            {
                title:'Out Door Kitchen 2',
                img: kitchen,
                alt:'Kitchen Image',
                link:'/Products/AboveGroundPools/kitch2'
            },
            {
                title:'Out Door Kitchen 3',
                img: kitchen,
                alt:'Kitchen Image',
                link:'/Products/AboveGroundPools/kitch3'
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
        <h2 className={styles.h2}>Services</h2>      
        {this.renderCards()}
      </div>
    )
  }
}
