import React from 'react';
import EPGHeader from './EPGHeader/EPGHeader';
import EPGBody from './EPGBody/EPGBody';
import './EPG.less';

export default function EPG() {
  return (
    <div className='EPG'>
      <EPGHeader />
      <div className='currenttime-marker' />
      <EPGBody />
    </div>
  );
}
