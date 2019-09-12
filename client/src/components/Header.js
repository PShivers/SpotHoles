import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <h2 class="ui center aligned icon header">
            <i class="circular map outline icon"></i>
                    SpotHoles
                    <h4>If you see something, spray something!</h4>
        </h2> 
        );
    }
}
 
export default Header;