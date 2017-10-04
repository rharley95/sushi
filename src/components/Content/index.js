
import React from 'react';
import './style.css';

//This is a Stateless Component, this means that this component
//--does not pass anything, but st HTML
//this.props."className of whatever" will fetch data from the 
//Components tag. for Ex: in App.js inside <Header />

//Since this is a Stateless Component we don't need to use "this" since we can
//Fetch that data in the const of Header

const Content = (props) => {
    return(
        <footer>
        hi
        </footer>
    )
}
    

export default Content;