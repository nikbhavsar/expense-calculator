import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth'; 

export const LoginPage = ({startLogin}) => {

    return (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title"> Expense Calculator </h1>
        <p className="box-layout__sub-title"> Let's track your expense smartly</p>
        <button className="box-layout__login-button" onClick={startLogin}> Login with Google</button>
        </div>
        </div>
    );

};

const mapDispatchToProps = (dispatch) => ({
startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);