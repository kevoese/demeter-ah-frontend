
import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Component', () => {
  it('Should render without errors', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
});
