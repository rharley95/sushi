import React from 'react';
import './style.css';
import styled from 'styled-components';
//This is a Stateless Component, this means that this component
//--does not pass anything, but static HTML


const Sort = (props) => {

    const Text = styled.a `
    text-decoration: none;
    color: #999;
    font-size: 20px;
    `;

    const SubText = Text.extend`
    font-size: 10px;
    margin-left: 20px;
    `;

    return(
        <div className="white-wrapper">
         <Text>Following</Text>
         <SubText>Suggestions</SubText>
        </div>
    )
}
    

export default Sort;