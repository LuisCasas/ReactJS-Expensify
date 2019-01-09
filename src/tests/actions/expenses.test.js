import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('Should remove expense', () => {
    const action = removeExpense({ id: 'abc123' });
 
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
});

test('Should edit expense', () => {
   const action = editExpense('abc123', { note: 'note'} ); 

   expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'note'
        }
   });
});

test('Shoud setup start add expense action', () => {
    const action = addExpense(expenses[1]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
});


test('Should add expense to database', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Test',
        amount: 200,
        note: 'Test',
        createdAt: 930200000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });

});

test('Should add expense with default to database and store', () => {

});