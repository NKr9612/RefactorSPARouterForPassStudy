import { Link } from 'react-router-dom';
import '../styles/ProductsList.css';
import React, { Component }  from 'react';

const productList = ['czapka', 'rękawiczki', 'spodnie', 'dresy', 'buty'];

const ProductsList = () => {

    const list = productList.map(item => (
        <li key={item}>
        <Link  to = { `/product/${item}`}>{item}</Link>
        </li>
    ))



    return ( 
        <div id='productList'>
        <div>Lista produktów:</div>
        <ul>
            {list}
        </ul>
        </div>
     );
}
 
export default ProductsList;
