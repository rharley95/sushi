import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Sort from './Sort';
import Basket from './Basket';
import Footer from './Footer';
import Content from './Content';
import ImageBox from './ImageBox';
import Button from './Button';
import Banner from './Banner';
import styled from 'styled-components';



class App extends Component {
  
  render() {
    const Button = styled.button`
    /* Adapt the colours based on primary prop */
    
    color: palevioletred;
    width: 300px;
    height: 50px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin: 0 auto;
    `;
  
    return (
      <div className="App">
        <Banner />
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
