import React, { Component } from 'react'
import styles from './Home.css'
import Hero from './Hero/Hero'
import Contact from './Contact/Contact'
import Services from './Services/Services'
import Reviews from '../../Components/Reviews/Reviews'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />    
        <Contact />
        <Services />
        <Reviews />
      </div>
    )
  } 
}
