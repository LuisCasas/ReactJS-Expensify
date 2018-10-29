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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sort: 'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]; 
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return [
                        ...expense,
                        action.updates
                    ];
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => action.id !== id);
        default: 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
          ...state,
          sort: 'amount'
      };
    case 'SORT_BY_DATE':
        return {
            ...state,
            sort: 'date'
        }; 
    case 'SET_START_DATE':
        return{
            ...state,
            startDate: action.startDate
        }
    case 'SET_END_DATE':
        return{
            ...state,
            endDate: action.endDate
        }
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
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Flight', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Train', amount: 200}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 150}));

console.log(store.getState());

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

console.log('---------------')

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

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

/*
const user = {
    name: 'John',
    age: 33
};

console.log({
    ...user,
    location: 'Edinburgh',
    age: 44
});
*/

