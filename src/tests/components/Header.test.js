import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test('Should render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});