import React from 'react';
import { mount } from 'enzyme';
import onClickOutside from './onClickOutside';

const map = {};
document.addEventListener = jest.genMockFn().mockImpl((event, cb) => {
  map[event] = cb;
})

describe('onClickOutse HOC', () => {
  it('should fire callback on click outside', () => {
    const cb = jest.fn();
    const props = {};
    const Inner = () => <div />;
    const InnerOnClickOutside = onClickOutside(props, cb)(Inner);
    mount(<InnerOnClickOutside />);
    map.click();
    expect(cb).toBeCalled();
  })
});