import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


class MapContainer extends Component {

    state = {  }
    render() { 
        console.log(API_KEY)
        return ( <div className="ui placeholder segment">
        <Map
          google={this.props.google}
          zoom={9.5}
          initialCenter={{ lat: 33.7490, lng: -84.3880}}
        >
        <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
      </div> );
    }
}
 
export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);