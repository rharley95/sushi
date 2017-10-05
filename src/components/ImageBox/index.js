
import React, { Component } from 'react';
import './style.css';
import Username from '../Username/';

//This is a Stateless Component, this means that this component
//--does not pass anything, but static HTML

class ImageBox extends Component {
    render(){
    return(
        <div className="wrapper">
        <div className="box">
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/200x150" className="box-img"/></a>
        </div>
        <Username/>
        </div>
        
    );
}
}
    

export default ImageBox;