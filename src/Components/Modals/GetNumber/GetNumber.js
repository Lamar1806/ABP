import React, { Component } from 'react'
import styles from './GetNumber.css'

export default class GetNumber extends Component {

    render() {
        let display = null;
        if(this.props.isModalVisable === true){
            display={display: 'flex'}
        }else{
            display={display: 'done'}
        }
        return (
        <div className={styles.container} style={display}>
            <div className={styles.innerContainer}>
                
                <p className={styles.txt}>We will be in touch with you soon!<br/>
                   Please provide us with a good number to contact you! 
                </p>

                <form className={styles.form} action="">
                    <input className={styles.input} type="text" placeholder='(123)-456-7890' value=''/>
                    <br/> 
                    <br/>
                    <input onClick={()=>this.props.toggleModal()} className={styles.submit} type="submit" value='Submit' />
                </form>

            </div>
        </div>
        )
    }
}
