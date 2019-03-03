import React from 'react';
import { Layout } from 'antd';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './AppFooter.css';

export default function AppFooter(props) {
  const { Footer } = Layout;
  return (
    <Footer className='AppFooter'>
      <div className='footer-regular-content'>{props.children}</div>
      <NavigationMenu
        mode='horizontal'
        logo={false}
      />
    </Footer>
  );
}
