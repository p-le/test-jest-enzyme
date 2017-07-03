import React from 'react';
import Home from './home';
import { shallow, mount } from 'enzyme';

describe('<Home />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  })
  
  it('should change openSideMenu state onClick button', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.state().openSideMenu).toEqual(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().openSideMenu).toEqual(true);
  });
})