import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Travel Flight', amount: 100, createdAt: 1000000}));
store.dispatch(addExpense({description: 'Train', amount: 200, createdAt: -2000000}));
store.dispatch(addExpense({description: 'Breakfast', amount: 10, createdAt: 22000000}));

// store.dispatch(setTextFilter('travel'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

// console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app')); 