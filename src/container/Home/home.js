import React, { Component } from 'react';
import { bind } from '../../utils/bind';
import SideMenu from '../../components/SideMenu/sidemenu';
import onClickOutside from '../../hocs/onClickOutside';

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
    const SideMenuOnClickOutside = onClickOutside({
      open: this.state.openSideMenu
    }, this.handleOpenSideMenu)(SideMenu);

    return(
      <div>
        <button type="button" onClick={this.handleOpenSideMenu}>Open</button>
        <SideMenuOnClickOutside />
        Home
      </div>
    );
  }
}

export default Home;