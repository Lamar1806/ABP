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
        let tyler = 'segrestbrook@goldmail.etsu.edu'
        let store = 'brooks@digitalversatility.com'
        let recipients = `${store}`
        return this.state.cards.map((e, index)=>{ 
            if(e.mainText === 'Service Call'){
                recipients += `,${tyler}`
            }else{
                recipients = `${store}`
            }            
            return (
                <Card
                    key={index}       
                    ionIconName = {e.ionIconName}
                    subText = {e.subText}
                    mainText = {e.mainText}
                    recipients = {recipients}
                />
            )
        })
    }
    render() {
        return (
        <div className={styles.container}>
         <h2 className={styles.h2}>Get In Touch</h2>     
            {this.renderCards()}
        </div>
        )
    }
}
