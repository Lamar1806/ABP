import React, { Component } from 'react'
import styles from './GetNumber.css'
import MyInput from '../../MyInput/MyInput'

export default class GetNumber extends Component {

    state={
        number: '',
    }
    
    getNumber = (number)=>{
      this.setState({number});
    }     
      
    submit = (e)=>{    
        console.log(this.props.name)
        
        // let url = 'http://localhost:3001/'
        let url = 'https://apbllc.net/'
        try{
            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',         
            },
            body: JSON.stringify({
                email: 'N/A',
                subject: `Customer Intrested in Product: ${this.props.item} `,
                message: `Product: ${this.props.item} 
                        <br />Option: ${this.props.option} 
                        <br />Phone: ${this.state.number}                        
                        `,
                recipients: 'pools@apbllc.net', /*this.props.recipients ? this.props.recipients : */
            })
            }) 
        
            alert('Thanks we will be in touch with you soon!')

        }catch(e){
            console.log(e);
        }
    }
    render() {
        let display = null;
        if(this.props.isModalVisable === true){
            display={display: 'flex'}
        }else{
            display={display: 'none'}
        }
        return (
        <div className={styles.container} style={display}>
        
            <div className={styles.backDrop} style={display} onClick={()=>this.props.toggleModal()}></div>

            <div className={styles.innerContainer}>
                
                <p className={styles.txt}>We will be in touch with you soon!<br/>
                   Please provide us with a good number to contact you! 
                </p>

                <form className={styles.form} onSubmit={this.submit}>
                    <MyInput className={styles.input} type="number" placeholder='(123)-456-7890' value='' getValue={this.getNumber.bind(this)}/>
                    <br/> 
                    <br/>
                    <input className={styles.submit} type="submit" value='Submit'/>
                </form>

            </div>
        </div>
        )
    }
}
