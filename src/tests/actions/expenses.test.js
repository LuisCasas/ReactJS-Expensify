import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

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

test('Shoud setup add expense action', () => {
    const expenseData = {
        description: 'Rent',
        amount: 500,
        createdAt: 1000,
        note: 'note'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Shoud setup add expense action with default values', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)         
        }
    });
});