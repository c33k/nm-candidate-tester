import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './NavigationMenu.less';

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
        <Link to='/'>
          <Icon type='home' />
          {props.mode === 'horizontal' ? '' : <span>Home</span>}
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/'>
          <Icon type='bars' />
          {props.mode === 'horizontal' ? '' : <span>EPG</span>}
        </Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/'>
          <Icon type='user' />
          {props.mode === 'horizontal' ? '' : <span>Profile</span>}
        </Link>
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
          src='/logo.png'
          alt='Nogin Media Logo'
        />
      </Menu.Item>
    );
  }

  return '';
}
