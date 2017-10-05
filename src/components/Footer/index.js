import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './style.css';
import dribbbleBig from '../../dribbble-logo-big.png';


//This is a Stateless Component, this means that this component
//--does not pass anything, but static HTML


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