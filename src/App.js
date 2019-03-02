import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar/SideBar';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  //TODO: break into smaller components

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout>
          <Header className='app-header' />
          <Content style={{ margin: '0 16px' }}>
            <div
              style={{
                padding: 24,
                background: '#202020',
                minHeight: 360,
                color: '#eee'
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
