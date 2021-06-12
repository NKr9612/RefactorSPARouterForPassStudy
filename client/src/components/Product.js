import React, { Component }  from 'react';
import SingleProduct from '../data/SingleProduct';
const Product = (props) => {
    return ( 
        <div>
        {/* <p>Produkt na którym obecnie jesteś to: <strong> {props.id}</strong></p>
        <p><em>Strona w przebudowie...</em></p> */}

            <SingleProduct />

        </div>
     );
}
 
export default Product;