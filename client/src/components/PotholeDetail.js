import React from 'react';

const PotholeDetail = (props) => {
    return (
        <div className="raised card">
            <div className="image">
                <img alt='pothole-pic'/>
            </div>

            <div className="extra">
            Severity:{props.pothole.severity}
                <div className="ui rating" data-rating="4"></div>
            </div>
            
            
        </div>
    );
}
 
export default PotholeDetail;