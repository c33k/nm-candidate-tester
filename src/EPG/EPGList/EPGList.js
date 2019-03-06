import React from 'react';
import './EPGList.less';

export default function EPGList(props) {
  return <div className='EPGList'>{renderChannels(props)}</div>;
}

function renderChannels(props) {
  return props.channels.map(channel => {
    return <div className='epg-list-item' key={channel.id} />;
  });
}
