import React from 'react';
import './style.css';
import dribbbleBig from '../../dribbble-logo-big.png';
import styled from 'styled-components';


//This is a Stateless Component, this means that this component
//--does not pass anything, but st HTML
//this.props."className of whatever" will fetch data from the 
//Components tag. for Ex: in App.js inside <Header />

//Since this is a Stateless Component we don't need to use "this" since we can
//Fetch that data in the const of Header

const Footer = (props) => {
    return(
        <footer>
            <div className="footer-text">
            <img src={dribbbleBig} />
            <h5>This is some descriptive text to the footer.</h5>
            <p>What are you working on? Dribbble is a community of designers sharing screenshots of their work, process, and projects.</p>
            </div>
        </footer>
    )
}
    

export default Footer;