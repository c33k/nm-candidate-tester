import React from 'react';
import { Button } from 'antd';
import EPGHeader from './EPGHeader/EPGHeader';
import './EPG.less';

export default function EPG() {
  return (
    <div className='EPG'>
      <EPGHeader />
      <section className='epg-body'>
        <header className='epg-header-hours'>{renderHourDivs()}</header>
        <div style={{ height: 300, width: '100%', background: 'darkblue' }}>
          TODO: remove
        </div>

        <Button type='primary' className='btn-now'>
          Now 
        </Button>
      </section>
    </div>
  );
}

function renderHourDivs() {
  var hours = [];

  for (var hour = 0; hour < 24; ++hour) {
    var hourString = ('0' + hour).slice(-2) + ':00';

    hours.push(
      <div key={hour} className='div-hour'>
        <span>{hourString}</span>
      </div>
    );
  }

  return hours;
}
