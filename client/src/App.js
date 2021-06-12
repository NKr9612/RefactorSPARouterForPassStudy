import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './SPA_elements/Header';
import Menu from './SPA_elements/Menu';
import Pages from './SPA_elements/Pages';
import Footer from "./SPA_elements/Footer";

class App extends Component {

  state = {  }

  render() { 
    return ( 
     <Router basename = {process.env.PUBLIC_URL}>
       <div className="container">
         <header>
           <Header />
         </header>
         <main>
             <aside>
                  <Menu />
             </aside>
             <section>
                 <Pages />
             </section>
         </main>
         <footer>
           <Footer />
         </footer>
       </div>

      </Router>
     );
  }
}
 
export default App;
