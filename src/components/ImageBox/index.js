
import React from 'react';
import './style.css';
import Username from '../Username/';

//This is a Stateless Component, this means that this component
//--does not pass anything, but st HTML
//this.props."className of whatever" will fetch data from the 
//Components tag. for Ex: in App.js inside <Header />

//Since this is a Stateless Component we don't need to use "this" since we can
//Fetch that data in the const of Header

const ImageBox = (props) => {
    return(
        <div className="wrapper">
        <div className="box">
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/200x150" className="box-img"/></a>
        </div>
        <Username/>
        </div>
        
    )
}
    

export default ImageBox;