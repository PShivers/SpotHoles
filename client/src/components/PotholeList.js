import React, { Component } from 'react';
import PotholeDetail from './PotholeDetail';
import { getPotholes } from '../util';

class PotholeList extends Component {
    state = { 
        potholes: [
            {location: "Pretty sure a sink hole is opening up under it", severity: 4},
            {location: "Right in front of the church on Ponce", severity: 5}
        ]
     }

     componentDidMount(){
         getPotholes().then(data => {
             console.log(data)
         })
     }
    render() { 
        return ( 
        <div className="ui four cards">
            {this.state.potholes.map(pothole=>{
                return <PotholeDetail pothole={pothole} />
                })
            }
        </div> );
    }
}
 
export default PotholeList;