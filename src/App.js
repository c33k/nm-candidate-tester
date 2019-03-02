import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    menuCollapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  //TODO: break into smaller components

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item to='/' key='0' style={{ paddingLeft: 'none' }}>
              <img
                className='ant-menu-item'
                style={{ width: '50%', margin: 'auto' }}
                src='logo2.png'
                alt='Nogin Media Logo'
              />
            </Menu.Item>
            <Menu.Item key='1'>
              <Icon type='home' />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='user' />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='bars' />
              <span>EPG</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Icon type='search' />
              <span>Search</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className='app-header' />
          <Content style={{ margin: '0 16px' }}>
            <div
              style={{
                padding: 24,
                background: '#202020',
                minHeight: 360,
                color: "#eee"
              }}
            >
              random content to test colors
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              background: '#202020',
              color: '#eee'
            }}
          >
            Norigin Media ©2019 Created by RLToscano
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
