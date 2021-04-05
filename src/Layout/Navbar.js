import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./NavBar.css";

const { Header } = Layout;

class NavBar extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div
        className="header-layout"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 99, 
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
        }}>
        <Header style={{ background: 'none' }}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ color: '#ffffff',  borderRadius: '5px' }}
          >
            <Menu.Item key="home">
              <Link to="">
                <Icon type="profile" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="publications">
              <Link to="/publications">
                <Icon type="file-done" />
                Publications
              </Link>
            </Menu.Item>
            <Menu.Item key="coaching">
              <Link to="/coaching">
                <Icon type="read" />
                Mentorship
              </Link>
            </Menu.Item>
            <Menu.Item key="personal">
              <Link to="/personal">
                <Icon type="user" />
                Personal
              </Link>
            </Menu.Item>
            <Menu.Item key="companies">
              <Link to="/companies">
                <Icon type="bulb" />
                Companies
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}
export default NavBar;
