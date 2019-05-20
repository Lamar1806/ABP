import React, { Component } from 'react'
import styles from './Gallery.css'

export default class Gallery extends Component {
    renderGallery = () => {
        return this.props.imgs.map((img, index)=>{
            return <img key={index} className={styles.img}src={img} alt={''}/>
        })
    }
    render() {
        return (
        <div className={styles.container}>
            <h2 className={styles.title}>{this.props.title}</h2>
            <div className={styles.galleryContainer}>
                {this.renderGallery()}
            </div>
        </div>
        )
    }
}
