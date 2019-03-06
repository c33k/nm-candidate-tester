import React from 'react';
import './EPGChannelLogos.less';

export default function EPGChannelLogos(props) {
  return (
    <div className='EPGChannelLogos'>
      {props.channels.map(channel => {
        return (
          <div
            key={channel.id}
            style={{ backgroundImage: `url("${channel.images.logo}")` }}
            className='channel-logo'
          />
        );
      })}
    </div>
  );
}
