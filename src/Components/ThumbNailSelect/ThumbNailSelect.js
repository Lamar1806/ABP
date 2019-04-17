import React, { Component } from 'react'
import styles from './ThumbNailSelect.css'

import img from './img/img.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'

export default class ThumbNailSelect extends Component {
    state={
        selected: null,
        imgUrls:[img, img2, img3, img4]
    }
    componentWillMount(){
        this.setState({selected: this.state.imgUrls[0]});
    } 
  
    selectImg(e){
        // e.preventDefault();
        this.setState({selected: e},()=>console.log(e));
        console.log(e);
    }

    renderThumbNail(){
        let list = []
        this.state.imgUrls.forEach((e, index)=>{ 
            list.push(
                <img 
                className={styles.thumbNail}
                key={index} 
                src={e} 
                alt="" 
                onClick={()=>this.selectImg(e)}
                />
            );
        })
        return list; 
    }

    render() {
        return (
        <div className={styles.container}>
            <img className={styles.mainImg} src={this.state.selected} alt=""/>
            <div className={styles.thumbNailContainer}>
                {this.renderThumbNail()}
            </div>
        </div>  
        )
    }
}
