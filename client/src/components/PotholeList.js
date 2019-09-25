import React, { Component } from 'react';
import PotholeDetail from './PotholeDetail';

class PotholeList extends Component {
     
    render() { 
        return ( 
        <div className="ui four cards">
            {this.props.potholes.map((pothole,index) =>{
                return <PotholeDetail pothole={pothole} key={pothole._id}/>
                })
            }
        </div> );
    }
}
 
export default PotholeList;