import React, { Component } from 'react';

class PotholeDetail extends Component {
    

    render() { 
        console.log(this.props)
        return ( 
        
            <div className="raised card">
                <div className="image">
                    <img />
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