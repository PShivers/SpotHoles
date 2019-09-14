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
         getPotholes().then(response => {
             console.log(response)
         })
     }
    render() { 
        return ( 
        <div className="ui four cards">
            {this.state.potholes.map((pothole,index) =>{
                return <PotholeDetail pothole={pothole} key={index}/>
                })
            }
        </div> );
    }
}
 
export default PotholeList;