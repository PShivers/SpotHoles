import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <h2 className="ui center aligned icon header" style={{ backgroundColor: 'tomato'}}>
            <i className="circular map outline icon"></i>
                    SpotHoles
                    <br />
                    If you see something, spray something!
        </h2> 
        );
    }
}
 
export default Header;