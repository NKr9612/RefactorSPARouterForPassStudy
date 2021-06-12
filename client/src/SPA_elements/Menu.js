import {NavLink} from 'react-router-dom';
import React, { Component }  from 'react';
import '../styles/Menu.css';

const Menu = () => {

    const menu = [
        { name: "Strona główna", path:"/"},
        {name: "Produkty", path: "/products"},
        {name:"Kontakt", path:"/contact"},
        {name:"Panel Admina", path:"/admin"}
    ]

 const menuList = menu.map(item => (
     <li key={item.name}>
         <NavLink to= {item.path} exact> {item.name}</NavLink>
     </li>
 ))
    return ( 
        <div id="menu">
            <ul>
              {menuList}
            </ul>
        </div>
     );
}
 
export default Menu;
