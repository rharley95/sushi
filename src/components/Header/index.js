import React from 'react';
import './style.css';
import dribbble from '../../dribbble-logo.png';
import Search from '../Search/';

//This is a Stateless Component, this means that this component
//--does not pass anything, but st HTML
//this.props."className of whatever" will fetch data from the 
//Components tag. for Ex: in App.js inside <Header />

//Since this is a Stateless Component we don't need to use "this" since we can
//Fetch that data in the const of Header

const divStyle = {
    backgroundColor: '#000000'
}

const Header = (props) => {
    return(
        <header className="dribbble">
         <img src={dribbble} />
        </header>
    )
}
    

export default Header;