import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    state = { 
        value: '',
     }
    

     handleChange = (e) =>{
         this.setState({
             value:e.target.value,
         })
     }

     handleClick =(e) =>{
         e.PreventDefault();
         this.setState({
             value: '',
         })
     }

    render() { 
        return ( 
            <form >
                <h3>Skontaktuj się ze mną!</h3>
                <textarea value = {this.state.value} onChange= {this.handleChange} placeholder = 'Wpisz wiadomość...'></textarea>
                <button onClick={this.handleClick}>Wyślij!</button>
                <Prompt when={this.state.value} message = 'Masz niewysłany formularz. Kontynuować?' />
            </form>
         );
    }
}
 
export default Contact;