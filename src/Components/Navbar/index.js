import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Navbar.css';

class Navbar extends Component {
  state = {
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="rightMenu">
            <RightMenu mode="horizontal" />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
