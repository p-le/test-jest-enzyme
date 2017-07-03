import React, { Component } from 'react';
import { bind } from '../utils/bind';

const onClickOutside = (props, callback) => (InnerComponent) => {
  return class extends Component {
    constructor() {
      super();
      bind.apply(this, ['setRef', 'handleClickOutside']);
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
      if (typeof callback !== 'function') {
        return;
      }

      if (this.wrapper && !this.wrapper.contains(event.target)) {
        callback(event);
      }
    }

    setRef(wrapper) {
      this.wrapper = wrapper;
    }

    render() {
      return (
        <div ref={this.setRef}>
          <InnerComponent {...props} />
        </div>
      )
    }
  }
}

export default onClickOutside;