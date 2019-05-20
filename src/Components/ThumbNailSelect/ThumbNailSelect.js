import React, { Component } from 'react'
import styles from './ThumbNailSelect.css'



export default class ThumbNailSelect extends Component {
    state={
        selected: null,
    }
    componentWillMount(){
        this.setState({selected: this.props.imgs[0]});
    } 
  
    selectImg(e){
        // e.preventDefault();
        this.setState({selected: e},()=>console.log(e));
        console.log(e);
    }

    renderThumbNail(){
        let list = []
        this.props.imgs.forEach((e, index)=>{ 
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
