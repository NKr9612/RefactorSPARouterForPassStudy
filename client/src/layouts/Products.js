import {Link} from 'react-router-dom';
import Product from '../components/Product';
import React, { Component }  from 'react';

const Products = ({match}) => {
    return ( 
        <div id='oneProduct'>
        <h3>Strona produktu</h3>
        <Product id={match.params.id} />
        <Link to = '/products'>Powrót</Link>
        </div>
     );
}
 
export default Products;