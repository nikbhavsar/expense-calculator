import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import configureStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import {login,logout} from './actions/auth';
import { Provider } from 'react-redux';
import expenseByFilter from './selectors/expenses';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import expenses from './reducers/expenses';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const state = store.getState();



const visibleExpenses = expenseByFilter(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});