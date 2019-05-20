import React, { Component } from 'react'
import styles from './contact.css'
import MyInput from '../../Components/MyInput/MyInput.js' 

export default class contact extends Component {
  state={
    email: '',
    subject: '',
    message: '',
  }

  getEmail = (email)=>{
    this.setState({email});
  }
  getSubject = (subject)=>{
    this.setState({subject});
  }
  getMessage = (message)=>{
    this.setState({message});
  }
  
  submit = (e)=>{    
    e.preventDefault();
    // let url = 'http://localhost:3001/'
    let url = 'https://apbllc.net/'
  
    try{
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',         
        }, 
        body: JSON.stringify({
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
          recipients: this.props.location.state ? this.props.location.state.recipients : 'pools@apbllc.net'
        })
      }) 

      alert('Thanks we will be in touch with you soon!')
      
    }catch(e){
      alert(e);
      console.log(e);
    }
  }

  render() {   
    window.scroll(0,0) 
    return (
      <form className={styles.container} onSubmit={this.submit}>
          <h2 className={styles.h2}>Contact Us</h2>          
          {/* <div style={{height: '100%',minHeight:'100%'}}> */}
          <MyInput className={styles.email} type="text" placeholder='Your Email' value='' getValue={this.getEmail.bind(this)}/>
          <MyInput className={styles.subject} type="text" placeholder='Subject' value='' getValue={this.getSubject.bind(this)}/>
          <MyInput inputType='textArea' className={styles.body} placeholder='Your Concerns' name="body" id="" rows="20" getValue={this.getMessage.bind(this)}/>
          <input className={styles.submit} type="submit" value='Submit'/>
          {/* </div> */}
      </form>
    )
  }
}
