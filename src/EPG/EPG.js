import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Skeleton } from 'antd';
import EPGHeader from './EPGHeader/EPGHeader';
import EPGBody from './EPGBody/EPGBody';
import EPGChannelLogos from './EPGChannelLogos/EPGChannelLogos';
import './EPG.less';

export default function EPG() {
  const epg = useEPGState();

  if (epg.loading) {
    return <Skeleton className='epg-skeleton' />;
  }

  if (epg.error.status) {
    return (
      <Alert
        className='error-alert'
        message='Error'
        description={epg.error.message}
        type='error'
        showIcon
      />
    );
  }

  return (
    <div className='EPG'>
      <EPGHeader />
      <div className='currenttime-marker' />
      <EPGChannelLogos channels={epg.data.channels}/>
      <EPGBody channels={epg.data.channels} />
    </div>
  );
}

function useEPGState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false });
  const [data, setData] = useState({ channels: [] });

  const EPG_URL = 'http://localhost:1337/epg'; //TODO: MAKE IT CONFIGURABLE PER ENVIRONMENT
  const success = res => {
    setData(res.data);
    setLoading(false);
  };

  const failure = err => {
    console.log(err);
    setLoading(false);
    setError({
      status: true,
      message: `Error trying to fetch data from ${EPG_URL}`
    });
  };

  //componentDidMount
  useEffect(() => {
    axios
      .get(EPG_URL)
      .then(success)
      .catch(failure);
  }, []);

  return {
    data,
    loading,
    error
  };
}
