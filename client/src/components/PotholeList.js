import React, { Component } from 'react';
import PotholeDetail from './PotholeDetail';
import { getPotholes } from '../util';

class PotholeList extends Component {
    state = { 
        potholes: []
     }

     componentDidMount(){
         getPotholes().then(response => {
             let potholes = response.data;
             this.setState({potholes})
         })
     }
     
    render() { 
        return ( 
        <div className="ui four cards">
            {this.state.potholes.map((pothole,index) =>{
                return <PotholeDetail pothole={pothole} key={pothole._id}/>
                })
            }
        </div> );
    }
}
 
export default PotholeList;