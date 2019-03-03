import React, { useState } from 'react';
import { Layout } from 'antd';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './SideBar.css';

const { Sider } = Layout;

export default function SideBar(props) {
  const state = useCollapsed(false);

  return (
    <Sider className='sidebar' collapsible {...state}>
      <NavigationMenu mode='inline' logo={true} />
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
