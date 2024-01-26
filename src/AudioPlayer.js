import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = () => {
    const audioSrc = '/Pushin%2040%20opus.opus';
  
    return (
      <H5AudioPlayer
        autoPlay
        src={audioSrc}
        onPlay={(e) => console.log('onPlay')}
        loop={true}
      />
    );
  };

export default AudioPlayer;