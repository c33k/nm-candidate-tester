import React, { useState } from 'react';
import { Layout, Row } from 'antd';
import SearchInput from '../SearchInput/SearchInput';
import './AppHeader.less';

export default function AppHeader() {
  const [hideLogo, setHideLogo] = useState(false);
  const { Header } = Layout;

  function handleSearchInputChanged(inputSearchExpanded) {
    setHideLogo(inputSearchExpanded);
  }

  return (
    <Header className='AppHeader'>
      <Row type='flex' justify='end' align='middle' style={{ height: '100%' }}>
        <a href='/' className={`header-logo ${hideLogo ? 'hide' : ''}`}>
          <img src='/logo.png' alt='Nogin Media Logo' />
        </a>
        <SearchInput changed={handleSearchInputChanged} />
      </Row>
    </Header>
  );
}
