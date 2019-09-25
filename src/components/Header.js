import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
    <header>
    <h1> Expensify </h1>
    </header> 
    <NavLink activeClassName="is-active" exact={true} to="/"> Home </NavLink>
    <NavLink activeClassName="is-active" to="/create"> Create </NavLink>
    <NavLink activeClassName="is-active" to="/edit"> Edit </NavLink>
    <NavLink activeClassName="is-active" to="/help"> Help </NavLink>
    </div>
);

export default Header;