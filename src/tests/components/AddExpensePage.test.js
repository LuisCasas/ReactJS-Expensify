import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

test('Should add expense correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);

    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn()};
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenCalledWith('/');
    expect(onSubmit).toHaveBeenCalledWith(expenses[1]); 
});