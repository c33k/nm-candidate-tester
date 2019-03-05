import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import './EPGBody.less';

export default function EPGBody() {
  const refBody = useRef(null);
  const autoScrollState = useAutoScroll(true, refBody);

  return (
    <section
      className='epg-container'
      ref={refBody}
      onScroll={autoScrollState.handleOnScroll}
    >
      <header className='epg-header-hours'>{renderHourDivs()}</header>
      {renderNowButton(autoScrollState)}
      <div style={{height: 500, width: '100%'}}>

      </div>
    </section>
  );
}

function renderNowButton(state) {
  const handleClickNow = () => {
    state.setAutoScrolling(true);
  };

  return state.autoScrolling ? (
    ''
  ) : (
    <Button type='primary' className='btn-now' onClick={handleClickNow}>
      Now
    </Button>
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

  return { autoScrolling, setAutoScrolling, handleOnScroll };
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
