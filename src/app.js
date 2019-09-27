import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import configureStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import expenseByFilter from './selectors/expenses';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import expenses from './reducers/expenses';
import './firebase/firebase';

const store = configureStore();

const state = store.getState();



const visibleExpenses = expenseByFilter(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx = (
<Provider store = {store}>
<AppRouter />
</Provider>
);

ReactDOM.render(<p> Loading... </p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'));
});
