import React, { Component } from 'react'
import Card from './Card'
import styles from './Contact.css'

export default class Contact extends Component {
    state = {
        cards:[
            {
                ionIconName: 'ion-md-hammer',
                subText: 'Schedule a',
                mainText: 'Service Call',
            },
            {
                ionIconName: 'ion-md-cash',
                subText: 'Get',
                mainText: 'Pricing',
            },
            {
                ionIconName: 'ion-md-map',
                subText: 'Request a',
                mainText: 'Brochure',
            },
            {
                ionIconName: 'ion-md-help',
                subText: 'Ask a',
                mainText: 'Question',
            },
            {
                ionIconName: 'ion-md-mail',
                subText: 'Get in touch',
                mainText: 'Contact Us',
            },
        ]
    }
    renderCards(){
        return this.state.cards.map((e, index)=>{
            return (
                <Card  
                    key={index}       
                    ionIconName = {e.ionIconName}
                    subText = {e.subText}
                    mainText = {e.mainText}
                />
            )
        })
    }
  render() {      
    return (
      <div className={styles.container}>
        {this.renderCards()}
      </div>
    )
  }
}
