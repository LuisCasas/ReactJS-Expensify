import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render component ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={200} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render component ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={100} />);
    expect(wrapper).toMatchSnapshot();
});