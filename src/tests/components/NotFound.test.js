import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../../components/NotFound';

test('Should render NotFound component', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});