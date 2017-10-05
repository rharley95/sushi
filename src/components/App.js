import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Sort from './Sort';
import Basket from './Basket';
import Footer from './Footer';
import ImageBox from './ImageBox';
import Button from './Button';
import styled from 'styled-components';



class App extends Component {
    
  render() {
    const Title = styled.h1`
    background-color: #000;
    font-size: 1.5em;
    color: #ffffff;
    margin: 0;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

      
    return (
      <div className="App">
        <Title> This Banner component was created through styled-components! </Title>
        <Header />
        <Sort />
        <Basket />
        <Button />
        <Footer />
        
      </div>
    );
  }
}

export default App;
