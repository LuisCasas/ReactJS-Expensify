import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Travel Flight', amount: 100, createdAt: -10000}));
const expenseTwo = store.dispatch(addExpense({description: 'Travel Train', amount: 200, createdAt: -2000}));

store.dispatch(setTextFilter('flight'));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));