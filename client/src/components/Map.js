import React, { Component } from 'react';

class Map extends Component {
    state = {  }
    render() { 
        return ( <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="pdf compass outline icon"></i>
          Im gon b a map!
        </div>
        <div class="ui primary button">Add Pothole</div>
      </div> );
    }
}
 
export default Map;