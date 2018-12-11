import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm component', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('Should render ExpenseForm component with values from a expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid submition', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test('Should set description value', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('Should set note value', () => {
    const value = 'This is a note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('note')).toBe(value);
});

test('Should set a valid amount value', () => {
    const value = '22.5';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

   expect(wrapper.state('amount')).toBe(value);
});

test('Should set an invalid amount value', () => {
    const value = '22.5333';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe('');
});

test('Should call onsubmit prop for valid submittion', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createdAt: expenses[2].createdAt
    });
});


test('Should set new date', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now);

});