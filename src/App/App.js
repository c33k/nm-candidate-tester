import React from 'react';
import { Layout } from 'antd';
import SideBar from '../SideBar/SideBar';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import './App.css';

const { Content } = Layout;

export default function App() {
  return (
    <Layout className='Layout'>
      <SideBar />
      <Layout>
        <AppHeader />
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
        <AppFooter>Norigin Media ©2019 Created by RLToscano</AppFooter>
      </Layout>
    </Layout>
  );
}
