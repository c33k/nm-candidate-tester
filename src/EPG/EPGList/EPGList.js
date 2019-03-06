import React from 'react';
import Schedule from '../Schedule/Schedule';
import {
  calculateScheduleStartPosition,
  calculateScheduleWidth
} from '../../hour-helper';
import './EPGList.less';

export default function EPGList(props) {
  return <div className='EPGList'>{renderChannels(props)}</div>;
}

function renderChannels(props) {
  return props.channels.map(channel => {
    return (
      <div key={channel.id} className='epg-list-item'>
        {channel.schedules.map((schedule, idx) => (
          //Ideally, we should not use the index here. BUT, since our schedule has no valid id in the api, i'm creating a fake one here
          <Schedule
            schedule={schedule}
            width={calculateScheduleWidth(schedule)}
            left={calculateScheduleStartPosition(schedule)}
            key={channel.id + idx}
          />
        ))}
      </div>
    );
  });
}
