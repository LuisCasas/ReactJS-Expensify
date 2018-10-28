import {createStore, combineReducers } from 'redux';


const expensesReducerDefaultState = [];

const filtersReducerDefaultState = [{
    text: '',
    sort: 'date',
    startDate: undefined,
    endDate: undefined
}];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: '534gsdfg434',
        description: 'Travel expense',
        note: 'Travel to London',
        amount: 300,
        createAt: 0
    }],
    filters: {
        text: 'travel',
        sort: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};