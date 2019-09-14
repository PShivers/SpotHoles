import React, { Component } from 'react';

class Map extends Component {
    state = {  }
    render() { 
        return ( <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pdf compass outline icon"></i>
          Im gon b a map!
        </div>
        <div className="ui primary button">Add Pothole</div>
      </div> );
    }
}
 
export default Map;