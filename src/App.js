import React, { useState } from 'react';
import { Layout, Row } from 'antd';
import SideBar from './SideBar/SideBar';
import SearchInput from './SearchInput/SearchInput';
import './App.css';

const { Header, Content, Footer } = Layout;

export default function App(props) {
  const [hideLogo, setHideLogo] = useState(false);

  function handleSearchInputChanged(inputSearchExpanded) {
    setHideLogo(inputSearchExpanded);
  }

  return (
    <Layout className='Layout'>
      <SideBar />
      <Layout>
        <Header className='app-header'>
          <Row
            type='flex'
            justify='end'
            align='middle'
            style={{ height: '100%' }}
          >
            <a href='/' className={`header-logo ${hideLogo ? 'hide' : ''}`}>
              <img src='logo.png' alt='Nogin Media Logo' />
            </a>
            <SearchInput changed={handleSearchInputChanged} />
          </Row>
        </Header>
        <Content className='LayoutContent'>
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
        <Footer className='Footer'>
          Norigin Media ©2019 Created by RLToscano
        </Footer>
      </Layout>
    </Layout>
  );
}
