import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './style.css';
import dribbble from '../../dribbble-logo.png';


//This is a Stateless Component

const Header = (props) => {

    const List = styled.ul`
    display: flex;
    list-style: none;
`;
    const Item = styled.li`
    text-decoration: none;
    font-size: 15px;
    color: #999;
    margin-left: 20px;
    `;

    return(
        <header className="dribbble">
         <img src={dribbble} />
         <List>
            <Item>Shots</Item>
            <Item>Designers</Item>
            <Item>Blog</Item>
            <Item>Podcast</Item>
            <Item>Meetups</Item>
            <Item>Jobs</Item>
            <Item>Hiring</Item>
         </List>
        </header>
    )
}
    

export default Header;