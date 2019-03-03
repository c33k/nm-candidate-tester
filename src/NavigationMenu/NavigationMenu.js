import React from 'react';
import { Menu, Icon } from 'antd';
import './NavigationMenu.css';

export default function NavigationMenu(props) {
  return (
    <Menu
      theme='dark'
      className='NavigationMenu'
      defaultSelectedKeys={['1']}
      mode={props.mode}
    >
      {getLogo(props.logo)}
      <Menu.Item key='1'>
        <Icon type='home' />
        {props.mode === 'horizontal' ? '' : <span>Home</span>}
      </Menu.Item>
      <Menu.Item key='2'>
        <Icon type='user' />
        {props.mode === 'horizontal' ? '' : <span>Profile</span>}
      </Menu.Item>
      <Menu.Item key='3'>
        <Icon type='bars' />
        {props.mode === 'horizontal' ? '' : <span>EPG</span>}
      </Menu.Item>
    </Menu>
  );
}

function getLogo(hasLogo) {
  if (hasLogo) {
    return (
      <Menu.Item to='/' key='0' className='menu-item-logo'>
        <img
          className='menu-item-logo-img'
          src='logo.png'
          alt='Nogin Media Logo'
        />
      </Menu.Item>
    );
  }

  return '';
}
