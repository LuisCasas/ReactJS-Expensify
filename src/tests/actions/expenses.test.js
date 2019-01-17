import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'abc123';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {

    const expensesData = {};

    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });

   database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

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
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Test',
        amount: 200,
        note: 'Test',
        createdAt: 930200000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});



test('Should add expense to database with default', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });

});


test('Should set expenses action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch expenses from database', (done) => {
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('Should remove expense from database', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {     
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });       
        
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('Should edit expense from database', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {
        description: 'Modified',
        amount: 2000,
        note: 'Note modified',
        createdAt: 0
    }

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({...updates});

        done();
    });
});