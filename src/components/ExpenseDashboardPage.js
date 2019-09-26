import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummery from './ExpensesSummery';

const ExpenseDashboardPage = () => (
    <div> 
    <p> This is my expence dashboard page. </p>
    <ExpenseSummery />
    <ExpenseListFilters />
    <ExpenseList />
    
    </div>
);

export default ExpenseDashboardPage;