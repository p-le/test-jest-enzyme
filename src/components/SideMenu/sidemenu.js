import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './sidemenu.scss';

class SideMenu extends Component {
  render() {
    const { open } = this.props;
    
    const classes = classnames({
      [styles.container]: true,
      [styles.containerActive]: open
    })

    return (
      <aside className={classes}>
        SideMenu
      </aside>
    );
  }
}

SideMenu.propTypes = {
  open: PropTypes.bool.isRequired
}

export default SideMenu;