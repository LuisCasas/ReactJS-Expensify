import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should print 0', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should print total 30', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(30);
});

test('Should print total 130', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(130);
});

