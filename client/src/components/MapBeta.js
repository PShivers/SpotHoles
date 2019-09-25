import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


class MapContainer extends Component {
  state = { 
    showingInfoWindow: false,
    activeMarker: {},
    selectedMarker: {},
    selectedPlace: {},
    newMarker: {name: "newMarker", lat: Number, lng: Number}      
  }

  onMarkerClick =(markerProps, marker, e) => {
    console.log(markerProps)
    this.setState({
      selectedPlace: markerProps,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  mapClicked=(mapProps, map, clickEvent)=>{
    console.log(this.state)
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }else{
      const latitude = clickEvent.latLng.lat();
      const longitude = clickEvent.latLng.lng();
      const newMarker = {...this.state.newMarker};
      newMarker.lat = latitude;
      newMarker.lng = longitude;       
      this.setState({newMarker});
    }
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

        {this.props.potholes.map((pothole)=>{
          return <Marker key={pothole.id} position = {pothole.position} />
        })}

        <Marker 
          position={{lat:this.state.newMarker.lat, lng:this.state.newMarker.lng }}
          draggable={true}
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    </div> );
  }
}
 
export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);