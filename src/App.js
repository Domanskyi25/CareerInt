import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(new Audio());

  // Обробка грання/паузи треку
  useEffect(() => {
    const audio = audioRef.current;

    if (currentTrack) {
      audio.src = currentTrack.url;
      
      if (isPlaying) {
        audio.play().catch(e => console.log('Play error:', e));
      } else {
        audio.pause();
      }
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (queue.length > 0) {
        const nextIndex = (currentIndex + 1) % queue.length;
        setCurrentIndex(nextIndex);
        setCurrentTrack(queue[nextIndex]);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, isPlaying, queue, currentIndex]);

  const playTrack = (track, trackList = [track]) => {
    setCurrentTrack(track);
    setQueue(trackList);
    setCurrentIndex(trackList.findIndex(t => t.id === track.id));
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (queue.length > 0) {
      const nextIndex = (currentIndex + 1) % queue.length;
      setCurrentIndex(nextIndex);
      setCurrentTrack(queue[nextIndex]);
    }
  };

  const playPrevious = () => {
    if (queue.length > 0) {
      const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
      setCurrentIndex(prevIndex);
      setCurrentTrack(queue[prevIndex]);
    }
  };

  const seekTo = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <MainContent onPlayTrack={playTrack} />
      </div>
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlayPause={togglePlayPause}
        onPlayNext={playNext}
        onPlayPrevious={playPrevious}
        currentTime={currentTime}
        duration={duration}
        onSeek={seekTo}
      />
    </div>
  );
}

export default App;
