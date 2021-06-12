import {Route, Switch} from 'react-router-dom';
import React, { Component }  from 'react';

import HomePage from '../layouts/HomePage';
import Products from '../layouts/Products';
import Contact from '../layouts/Contact';
import PanelAdmin from '../layouts/AdminPanel';
import AdminPanelLogin from '../layouts/PanelAdminLogin'
import ProductsList from '../layouts/ProductsList';
import ErrorPage from '../layouts/ErrorPage'

const Pages = () => {
    return ( 
        <Switch>
          <Route path= '/' exact component ={HomePage} ></Route>
          <Route path= '/products' exact component ={ProductsList} ></Route>
          <Route path= '/product/:id' component ={Products} ></Route>
          <Route path= '/contact' exact component ={Contact} ></Route>
          <Route path= '/admin' exact component ={PanelAdmin} ></Route>
          <Route path = '/login' exact component = {AdminPanelLogin}></Route>
          <Route component ={ErrorPage} ></Route>
        </Switch>
     );
}
 
export default Pages;
