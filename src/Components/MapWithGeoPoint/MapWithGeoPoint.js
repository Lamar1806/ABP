import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import styles from './MapWithGeoPoint.css'

const AnyReactComponent = ({ text }) => <div>{text}<i className={`icon ion-md-hammer`}style={{color:'red',fontSize: 20}}></i> </div>;

export default class MapWithGeoPoint extends Component {
    static defaultProps = {
        center: {
          lat: 35.254199,
          lng: -95.1267000
        },
        zoom: 18
    };
    state = {
        lat: 35.254199,
        lng: -95.1267000
    }

    
    render() {
        
        return (
        // Important! Always set the container height explicitly
        <div className={styles.container}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBTG7m9w4oP1N2C4xoCYXJV2-cfnzbaDhY'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
            <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng} 
            text="ABP" 
            />
        </GoogleMapReact>
        </div>
        )
    }
}
