import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, Alert, Tabs, List } from 'antd';
import ProgramHeader from './ProgramHeader/ProgramHeader';
import ProgramMeta from './ProgramMeta/ProgramMeta';
import './Program.less';

export default function Program(props) {
  const state = useProgram(props.id);
  const TabPane = Tabs.TabPane;

  if (state.loading) {
    return <Skeleton className='program-skeleton' />;
  }

  if (state.error.status) {
    return (
      <Alert
        className='error-alert'
        message='Error'
        description={state.error.message}
        type='error'
        showIcon
      />
    );
  }

  return (
    <div className='Program'>
      <ProgramHeader image={state.program.images.icon} />
      <ProgramMeta program={state.program} />
      <div className='program-content'>
        <p>{state.program.description}</p>
        <p>
          <span>Cast:</span>
          {state.program.meta.cast.map((cast, idx, casts) => {
            return (
              <span key={idx}>{`${cast.name}${
                idx === casts.length - 1 ? ' ' : ', '
              }`}</span>
            );
          })}
        </p>
        <p>
          <span>Creators:</span>
          {state.program.meta.creators.map((creator, idx, creators) => {
            return (
              <span key={idx}>{`${creator.name}${
                idx === creators.length - 1 ? ' ' : ', '
              }`}</span>
            );
          })}
        </p>
      </div>
      <div className='seasons-container'>
        <Tabs defaultActiveKey='0'>
          {state.program.series.map((season, idx) => {
            return (
              <TabPane tab={season.title} key={idx}>
                {getSeasonContent(season)}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}

function useProgram(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false });
  const [program, setProgram] = useState({});

  const PROGRAM_URL = `${process.env.REACT_APP_BASE_URL}/program/${id}`;

  const success = res => {
    setProgram(res.data);
    setLoading(false);
  };

  const failure = err => {
    console.log(err);
    setLoading(false);
    setError({
      status: true,
      message: `Error trying to fetch program ${id} from ${PROGRAM_URL}`
    });
  };

  //componentDidMount
  useEffect(() => {
    axios
      .get(PROGRAM_URL)
      .then(success)
      .catch(failure);
  }, []);

  return { program, loading, error };
}

function getSeasonContent(season) {
  return (
    <List
      size='large'
      dataSource={season.episodes}
      renderItem={episode => <List.Item>{episode.title}</List.Item>}
    />
  );
}
