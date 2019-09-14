import React, { Component } from 'react';

class PotholeDetail extends Component {
    

    render() { 
        return ( 
        
            <div className="raised card">
                <div className="image">
                    <img alt='pothole-pic'/>
                </div>

                <div className="extra">
                Severity:
                    <div className="ui rating" data-rating="4"></div>
                </div>
                {this.props.pothole.location}
                
            </div>
        );
    }
}
 
export default PotholeDetail;