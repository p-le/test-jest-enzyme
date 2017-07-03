import React from 'react';
import { mount } from 'enzyme';
import onClickOutside from './onClickOutside';

describe('onClickOutse HOC', () => {
 it('should fire callback on click outside', () => {
    const cb = jest.fn();
    const props = {};
    const Inner = () => <div />;
    const InnerOnClickOutside = onClickOutside(props, cb)(Inner);
    mount(<InnerOnClickOutside />, { attachTo: document.getElementById('root')});
    document.dispatchEvent(new MouseEvent('mousedown'));
    expect(cb).toBeCalled();
  })
});