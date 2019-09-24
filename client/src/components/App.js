import React, { Component } from 'react';
import Header from './Header';
import MapBeta from './MapBeta';
import PotholeList from './PotholeList';
import { getPotholes } from '../util';


class App extends Component {
    state = { potholes: [] }

    componentDidMount(){
        getPotholes().then(response => {
            let potholes = response.data;
            this.setState({potholes})
        })
    }

    render() { 
        return ( 
        <div >
            <Header />
            <MapBeta />
            <PotholeList potholes={this.state.potholes}/>
        </div> );
    }
}
 
export default App;