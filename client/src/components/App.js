import React, { Component } from 'react';
import Header from './Header';
import Map from './Map'
import PotholeList from './PotholeList'

class App extends Component {
    state = {  }
    render() { 
        return ( 
        <div >
            <Header />
            <Map />
            <PotholeList />
        </div> );
    }
}
 
export default App;