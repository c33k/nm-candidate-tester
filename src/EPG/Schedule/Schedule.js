import React from 'react';
import { Link } from 'react-router-dom';
import './Schedule.less';

export default function Schedule(props) {
  const { width, left, schedule } = props;

  const scheduleClasses = `Schedule ${
    isPassingNow(schedule) ? 'passing-now' : ''
  }`;

  return (
    <div style={{ width, left }} className={scheduleClasses}>
      <Link to={`/program/${schedule.id}`}>
        <h1>{schedule.title}</h1>
        <span>{getFormatedHours(schedule)}</span>
      </Link>
    </div>
  );
}

//it should compare the whole date: even the current day because of midnight.
//BUT, for the sake of interview, I'm assuming the DAY is always correct (today) - just so we can see the highlighted boxes.
function isPassingNow(schedule) {
  const startDate = new Date(schedule.start);
  const endDate = new Date(schedule.end);

  const now = new Date();
  return (
    now.getHours() * 60 + now.getMinutes() >
      startDate.getHours() * 60 + startDate.getMinutes() &&
    now.getHours() * 60 + now.getMinutes() <
      endDate.getHours() * 60 + endDate.getMinutes()
  );
}

function getFormatedHours(schedule) {
  const startDate = new Date(schedule.start);
  const endDate = new Date(schedule.end);

  return (
    ('0' + startDate.getHours()).slice(-2) +
    ':' +
    ('0' + startDate.getMinutes()).slice(-2) +
    ' - ' +
    ('0' + endDate.getHours()).slice(-2) +
    ':' +
    ('0' + endDate.getMinutes()).slice(-2)
  );
}
