import '../styles/Header.css';
import {Route, Switch} from 'react-router-dom';
import React, { Component }  from 'react';

import imgHome from '../img/homePage.jpg';
import imgProducts from '../img/products.jpg';
import imgContact from '../img/contact.jpg';
import imgAdmin from '../img/adminPanel.jpg';

const Header = () => {
    return (  
        <div id="header">
            <Switch>
                <Route path='/' exact render = { () => (
            <img src={imgHome} alt="smth"/>)}/>

            <Route path='/products' render = { () => (
            <img src={imgProducts} alt="smth"/>)}/>

            <Route path='/contact' render = { () => (
            <img src={imgContact} alt="smth"/>)}/>

            <Route path='/admin' render = { () => (
            <img src={imgAdmin} alt="smth"/>)}/>

            <Route render = { () => (
            <img src={imgHome} alt="smth"/>)}/>
            </Switch>
        </div>
    );
}
 
export default Header;