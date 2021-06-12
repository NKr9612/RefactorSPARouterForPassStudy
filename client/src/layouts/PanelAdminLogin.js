import React, { Component }  from 'react';
const PanelAdmin = () => {
    return (  
        <form id = 'adminLogin'>
            <label htmlFor="">Podaj login</label><input type="text"/>
            <label htmlFor="">Podaj hasło</label><input type="password"/>
            <button>Zaloguj!</button>
        </form>
      );
}
 
export default PanelAdmin;