import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


class MapContainer extends Component {
    state = { 
      markers:[{
        position: { lat: 33.7490, lng: -84.380}
      },{
        position: { lat: 33.7490, lng: -84.4}
      },{
        position: { lat: 33.7490, lng: -84.360}
      }], 
      newMarker: {lat: Number, lng: Number}      
  }

  showInfoWindow =()=>{
    console.log('marker clicked')
  }

    mapClicked=(mapProps, map, clickEvent)=>{
        const latitude = clickEvent.latLng.lat();
        const longitude = clickEvent.latLng.lng();
        const newMarker = {lat:Number,lng: Number};
        newMarker.lat = latitude;
        newMarker.lng = longitude;
        console.log(newMarker)
        console.log(this.state)
        this.setState({newMarker});
        console.log(this.state.newMarker)
        // ...
      }

    render() { 
        return ( <div className="ui placeholder segment">
        <Map
            onClick={this.mapClicked}   
            google={this.props.google}
            zoom={9.5}
            initialCenter={{ lat: 33.7490, lng: -84.3880}}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        <Marker position={{ lat: 33.7490, lng: -84.380}} />
        {this.state.markers.map((marker, index)=>{
          return <Marker key={index} position = {marker.position} />
        })}
        <Marker 
          position={this.state.newMarker}
          draggable={true}
          onClick={this.showInfoWindow}
        />
        </Map>
      </div> );
    }
}
 
export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);