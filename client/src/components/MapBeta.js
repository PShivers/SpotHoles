import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


class MapContainer extends Component {
  state = { 
    showingInputInfoWindow: false,
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

  onNewMarkerClick=()=>{
    console.log(this.state.newMarker)
  }
  mapClicked = (mapProps, map, clickEvent) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    } else {
      const latitude = clickEvent.latLng.lat();
      const longitude = clickEvent.latLng.lng();
      const newMarker = {...this.state.newMarker};
      newMarker.lat = latitude;
      newMarker.lng = longitude; 
      this.setState({
        newMarker: newMarker,
        activeMarker: newMarker, 
      });
      console.log(this.state)
      
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

          {this.props.potholes.map((pothole)=>{
            return <Marker name = {pothole.id}key={pothole.id} position = {pothole.position} onClick={this.onMarkerClick} />
          })}

          <Marker 
            position={{lat:this.state.newMarker.lat, lng:this.state.newMarker.lng }}
            onClick={this.onNewMarkerClick}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInputInfoWindow}>
              <div>
                <h1>bla</h1>
              </div>
          </InfoWindow>

        </Map>
      </div> );
  }
}
 
export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);