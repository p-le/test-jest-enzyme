import React, { Component } from 'react';
import { bind } from '../../utils/bind';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideMenu: false
    };
    bind.apply(this, ['handleOpenSideMenu']);
  }

  handleOpenSideMenu(e) {
    e.stopPropagation();
    this.setState({
      openSideMenu: !this.state.openSideMenu
    });
  }
  render() {
    return(
      <div>
        <button type="button" onClick={this.handleOpenSideMenu}>Open</button>
        Home
      </div>
    );
  }
}

export default Home;