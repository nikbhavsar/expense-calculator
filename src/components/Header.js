import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({startLogout}) => (
    <div>
        <header>
            <h1> Expensify </h1>
        </header>
        <NavLink activeClassName="is-active"  to="/dashboard"> Home </NavLink>
        <NavLink activeClassName="is-active" to="/create"> Create </NavLink>
        <NavLink activeClassName="is-active" to="/edit"> Edit </NavLink>
        <NavLink activeClassName="is-active" to="/help"> Help </NavLink>
        <button onClick={startLogout}> LogOut </button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);