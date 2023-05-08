import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount () {
        localStorage.removeItem("accessToken");
        // go to login route 
        window.location = '/login';
    }

    render() { 
        return null;
    }
}

export default Logout;