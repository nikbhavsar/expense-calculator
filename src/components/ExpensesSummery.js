import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';
import TotalNumberOfCount from '../selectors/expenses';
import TotalAmountOfExpenses from '../selectors/total-expenses';

const ExpenseSummery = ({expenseCount, expenseTotal}) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const totalExpenseAmount = (numeral(expenseTotal/100).format('$0,0.00')); 
   

    return (
         <div className="page-header">
         <div className="content-container">
         <h1 className="page-header__title"> You are viewing <span> {expenseCount} </span> <span>  {expenseWord} </span> of total <span>{totalExpenseAmount} </span> </h1>
         <div className="page-header__actions">
         <Link className="box-layout__login-button" to="/create">
         Add Expense
         </Link>
         </div>
         </div>
         </div>  
    )    
    
};

const mapPropsToState = (state) => {

    const filteredExpenses = TotalNumberOfCount(state.expenses,state.filters);

    return {
        expenseCount: filteredExpenses.length,
        expenseTotal: TotalAmountOfExpenses(filteredExpenses)
    }

}

export default connect(mapPropsToState)(ExpenseSummery);

