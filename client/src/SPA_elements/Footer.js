import {Route, Switch} from 'react-router-dom';
import React, { Component }  from 'react';
const Footer = () => {
    return ( 
        <div id="footer">
            <Switch>
          <Route path = '/' exact render ={()=>(
            <p>Jesteś na stronie głównej</p>
          )} />

         <Route path = '/:id' render ={(props)=>(
            <p>Jesteś na stronie <strong>{props.match.params.id}</strong></p>
          )} />

        <Route path = '/:id/:idPodstrony' render ={(props)=>(
            <p>Jesteś na stronie <strong>{props.match.params.id}</strong> i podstronie <strong>{props.match.params.idPodstrony}</strong></p>
          )} />
          </Switch>
        </div>
     );
}
 
export default Footer;