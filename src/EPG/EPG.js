import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import EPGHeader from './EPGHeader/EPGHeader';
import './EPG.less';

export default function EPG() {
  const refBody = useRef(null);
  const autoScrollState = useAutoScroll(true, refBody);
  //const [showNowButton, setShowNowButton] = useState(false);
  
  const handleClickNow = () => {    
    autoScrollState.setAutoScrolling(true);
  };  

  return (
    <div className='EPG'>
      <EPGHeader />
      <div className='currenttime-marker' />
      <section className='epg-body' ref={refBody} onScroll={autoScrollState.handleOnScroll}>
        <header className='epg-header-hours'>{renderHourDivs()}</header>
        {
          !autoScrollState.autoScrolling ? 
            (<Button type='primary' className='btn-now' onClick={handleClickNow}>
              Now 
            </Button>)
          : ''
        }
        
      </section>
    </div>
  );
}

function useAutoScroll(initialValue, refBody) {
  const [autoScrolling, setAutoScrolling] = useState(initialValue);

  useEffect(() => {
    let autoScrollingInterval = null;

    if (autoScrolling) {
      scrollToCurrentTime(refBody);
      autoScrollingInterval = setInterval(() => {
        scrollToCurrentTime(refBody);
      }, 1000);
    }

    return () => {
      if (autoScrollingInterval !== null) {
        clearInterval(autoScrollingInterval);
      }
    };
  }, [autoScrolling]);

  const handleOnScroll = () => {
    let nowScrollPosition = getScrollPositionForDate(new Date());

    if (Math.abs(nowScrollPosition - refBody.current.scrollLeft) > 20) {
      setAutoScrolling(false);
    }
  };

  return {autoScrolling, setAutoScrolling, handleOnScroll};
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

function scrollToCurrentTime(refBody) {
  refBody.current.scrollLeft = getScrollPositionForDate(new Date());
}

function getScrollPositionForDate(date) {
  return date.getHours() * 300 + (300 * date.getMinutes()) / 60;
}