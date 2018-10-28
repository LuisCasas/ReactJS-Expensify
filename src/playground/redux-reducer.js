import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ( {
            description = '', 
            note = '', 
            amount = 0,
            createAt = 0
        } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description, 
        note, 
        amount,
        createAt       
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});


const expensesReducerDefaultState = [];

const filtersReducerDefaultState = [{
    text: '',
    sort: 'date',
    startDate: undefined,
    endDate: undefined
}];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]; 
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => action.id !== id);
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

const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
 //   console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Flight', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Train', amount: 200}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

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