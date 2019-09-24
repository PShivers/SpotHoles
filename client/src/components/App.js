import React, { Component } from 'react';
import Header from './Header';
import MapBeta from './MapBeta'
import PotholeList from './PotholeList'

class App extends Component {
    state = {  }
    render() { 
        return ( 
        <div >
            <Header />
            <MapBeta />
            <PotholeList />
        </div> );
    }
}
 
export default App;