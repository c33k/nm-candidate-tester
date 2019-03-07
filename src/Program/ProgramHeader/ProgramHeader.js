import React, { useState } from 'react';
import { Icon } from 'antd';
import YouTube from 'react-youtube';
import './ProgramHeader.less';

export default function ProgramHeader(props) {
  const [playing, setPlaying] = useState(false);

  const handlePlayTrailer = () => {
    setPlaying(true);
  };

  if (playing && process.env.REACT_APP_YOUTUBE_VIDEO_ID) {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        //https://developers.google.com/youtube/player_parameters#autoplay
        autoplay: 1,
        autohide: 1
      }
    };

    return (
      <header className='ProgramHeader'>
        <YouTube
          videoId={process.env.REACT_APP_YOUTUBE_VIDEO_ID} //Hardcoded Vikings trailer just to showcase UI
          opts={opts}
          onReady={_onReady}
        />
      </header>
    );
  }

  return (
    <header
      className='ProgramHeader'
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      <div className='fader' />
      <div className='play-button-container' onClick={handlePlayTrailer}>
        <Icon type='play-circle' className='play-circle' />
      </div>
      <div className='fader bottom' />
    </header>
  );
}

function _onReady(event) {
  event.target.playVideo();
}
