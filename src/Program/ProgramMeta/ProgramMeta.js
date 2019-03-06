import React from 'react';
import { Row, Col } from 'antd';
import { formatDateTitle } from '../../hour-helper';
import './ProgramMeta.less';

export default function ProgramMeta(props) {
  const {program} = props;

  return (
    <Row className='ProgramMeta'>
      <Col
        className='channelLogo'
        xs={{ span: 6 }}
        lg={{ span: 4 }}
        style={{
          backgroundImage: `url("${program.channelImages.logo}")`
        }}
      />
      <Col xs={{ span: 18 }} lg={{ span: 20 }} className='meta'>
        <Row>
          <span className='channel-title'>{program.channelTitle}</span>
          <span className='program-time-exhibition'>
            {formatDateTitle(program.start, program.end)}
          </span>
        </Row>
        <Row>
          <h1>{program.title}</h1>
        </Row>
        <Row>
          <span>{program.meta.year}</span>
          {program.meta.genres.map((genre, idx) => {
            return (
              <span key={idx} className='genre'>
                {genre}
              </span>
            );
          })}
        </Row>
      </Col>      
    </Row>
  );
}
