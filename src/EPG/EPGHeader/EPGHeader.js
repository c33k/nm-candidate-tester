import React from 'react';
import { Button, Col, Row } from 'antd';
import './EPGHeader.less';

export default function EPGHeader() {
  return (
    <Row className='EPGHeader' type='flex' justify='end'>
      <Col span={20} offset={4} className='group-days'>
        {[-2, -1, 0, 1, 2].map(offset => getDay(offset))}
      </Col>
    </Row>
  );
}

function getDay(dayOffset) {
  let day = new Date();
  day.setDate(day.getDate() + dayOffset);

  const weekDay = day.toString().split(' ')[0];
  const dayOfMonth = ('0' + day.getDate()).slice(-2);
  const month = ('0' + (day.getMonth() + 1)).slice(-2);

  const classNameBtn = `btn-day ${dayOffset === 0 ? 'selected' : ''}`

  return (
    <Button type='ghost' key={dayOffset} className={classNameBtn}>
      <span>{weekDay}</span>
      <br />
      <span>{`${dayOfMonth}.${month}.`}</span>
    </Button>
  );
}
