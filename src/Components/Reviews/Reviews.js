import React, { Component } from 'react'
import styles from './Reviews.css'
import bg from './img/bg.png'
import Card from './card'

import review0 from './img/review0.jpg'
import review1 from './img/review1.jpg'
import review2 from './img/review2.jpg'

export default class Reviews extends Component {
  state={
    index: 0,
    cards:[
      {
        img: review0,
        text: 'They make the entire process easy, and the work is outstanding.'
        +'Once they are done they leave the pool area looking nice. It is also '
        +'fantastic that they can do the other backyard stuff like decks and ' 
        +'outdoor kitchens. i am looking forward to doing expanded decking and '
        +'a kitchen in the future!'
      },
      {
        img: review1,
        text: 'They installed our pool and did an amazing job. Very pleased with my pool.'
      },
      {
        img: review2,
        text: 'Best pool service in Oklahoma!'
      },
    ]
  }
  back(){
    let currentIndex = this.state.index
    if(currentIndex === 0){
      this.setState({index: this.state.cards.length - 1})
      return ;
    }
    this.setState((prevState)=>({index: prevState.index - 1}), ()=>console.log(this.state.index))
  }

  next(){
    let currentIndex = this.state.index
    if(currentIndex === this.state.cards.length -1){
      this.setState({index: 0})
      return ;
    }
    this.setState((prevState)=>({index: prevState.index + 1}), ()=>console.log(this.state.index))
  }
  
  renderCard(index){ 
    
    return(
      <Card 
        key={index}
        image={this.state.cards[index].img}
        text={this.state.cards[index].text} 
        back={this.back.bind(this)}
        next={this.next.bind(this)}
      />
    ) 
  }
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.bgImg} src={bg} alt=""/>

        <div className={styles.innerContainer}>
            <h2 className={styles.h2}>Reviews</h2>

            {this.renderCard(this.state.index)}           
            
        </div>

      </div>
    )
  }
}
