import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SideBar.css';

const { Sider } = Layout;

export default function SideBar(props) {
  const state = useCollapsed(false);
  const classLogoImg = `menu-item-logo-img ${
    state.collapsed ? ' collapsed' : ''
  }`;

  return (
    <Sider className='sidebar' collapsible {...state}>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item to='/' key='0' className='menu-item-logo'>
          <img className={classLogoImg} src='logo.png' alt='Nogin Media Logo' />
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
  );
}

function useCollapsed(initialValue) {
  const [collapsed, setCollapsed] = useState(initialValue);

  return {
    collapsed,
    onCollapse: collapsed => setCollapsed(collapsed)
  };
}
