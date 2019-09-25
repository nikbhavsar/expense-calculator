import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import configureStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import expenseByFilter from './selectors/expenses';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import expenses from './reducers/expenses';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:35000,createdAt:4000}));
const expenseTwo = store.dispatch(addExpense({description:'Gas bill',amount:65000,createdAt:3000}));
const expenseThree = store.dispatch(addExpense({description:'Rent',amount:45000,createdAt:2000}));



const state = store.getState();



const visibleExpenses = expenseByFilter(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx = (
<Provider store = {store}>
<AppRouter />
</Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));