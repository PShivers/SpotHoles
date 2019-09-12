import React, { Component } from 'react';
import Header from './Header';
import Map from './Map'

class App extends Component {
    state = {  }
    render() { 
        return ( 
        <div >
            <Header />
            <Map />
        </div> );
    }
}
 
export default App;