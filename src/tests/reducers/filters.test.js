import moment from 'moment';
import filterReducer from '../../reducers/filters';


test('Should setup default values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sort: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(state.sort).toBe('amount');
});

test('Should set sort by date', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sort: 'date'
    };

    const action = {type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);

    expect(state.sort).toBe('date');
});