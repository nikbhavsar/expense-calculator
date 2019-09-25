import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const CreateExpensePage = (props) => (
    <div>
    <p> This is my create expence page. </p>
    <ExpenseForm
    onSubmit = {(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
    }} />
    </div>
    );

    export default connect()(CreateExpensePage);