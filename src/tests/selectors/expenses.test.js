import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('Should filter by text value', () => {

    const filters = {
        text: 't',
        sort: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by star date', () => {

    const filters = {
        text: '',
        sort: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by end date', () => {

    const filters = {
        text: '',
        sort: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter by date', () => {

    const filters = {
        text: '',
        sort: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should filter by amount', () => {

    const filters = {
        text: '',
        sort: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});