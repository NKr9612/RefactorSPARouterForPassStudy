import React, { Component } from 'react';
import './products.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(products => this.setState({products}, () => console.log('Customers fetched...', products)));
  }

  render() {
    return (
      <div>
       
        <ul className='dataUl'>
        {this.state.products.map(products => 
          <li key={products.id}>{products.nazwa} {products.cena}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
