import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import TotalNumberOfCount from '../selectors/expenses';
import TotalAmountOfExpenses from '../selectors/total-expenses';

const ExpenseSummery = ({expenseCount, expenseTotal}) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const totalExpenseAmount = (numeral(expenseTotal/100).format('$0,0.00')); 
   

    return (
         <div>
         <h1> You are viewing {expenseCount}  {expenseWord} of total {totalExpenseAmount} </h1>
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

