import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
});

test('Should add new expense', () => {
    const expense = {
        id: 3,
        description: 'New game',
        amount: '50',
        note: '',
        createdAt: 5000000
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('Should amend expense by id', () => {

    const note = 'Note amended';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(note);
});

test('Should not amend expense by id', () => {

    const note = 'Note amended';

    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {

    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);    
});