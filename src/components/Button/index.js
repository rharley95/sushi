import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './style.css';


class Button extends Component {

render() {
        
    return(
        <button style={{backgroundColor: "#ccc", height: "50px", width: "700px", margin: "auto", border: "none", borderRadius: "10px", fontSize: "1.3em", display: "block"}}>
            Load more...
        </button>
    );
}
}

export default Button;