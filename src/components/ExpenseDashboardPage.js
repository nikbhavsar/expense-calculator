import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div> 
    <p> This is my expence dashboard page. </p>
    <ExpenseListFilters />
    <ExpenseList />
    
    </div>
);

export default ExpenseDashboardPage;