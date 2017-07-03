import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './sidemenu';

describe('<SideMenu />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<SideMenu open={false} />);
    expect(wrapper.find('aside')).toHaveLength(1);
  });
});