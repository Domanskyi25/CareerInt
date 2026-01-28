import React, { useRef, useEffect } from 'react';
import '../styles/Player.css';
import { historyManager } from '../utils/storageManager';

function Player({ 
  currentTrack, 
  isPlaying, 
  onTogglePlayPause, 
  onPlayNext, 
  onPlayPrevious,
  currentTime,
  duration,
  onSeek
}) {
  const trackLoggedRef = useRef(null);

  useEffect(() => {
    if (!currentTrack) return;

    // Log to history when track plays past 10 seconds
    if (isPlaying && currentTime > 10 && trackLoggedRef.current !== currentTrack.id) {
      trackLoggedRef.current = currentTrack.id;
      historyManager.addToHistory(currentTrack);
    }
  }, [isPlaying, currentTime, currentTrack]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    onSeek(percentage * duration);
  };

  return (
    <div className="player">
      <div className="player-track-info">
        {currentTrack ? (
          <>
            <div className="track-cover">
              <div className="cover-placeholder">{currentTrack.cover}</div>
            </div>
            <div className="track-details">
              <h4>{currentTrack.title}</h4>
              <p>{currentTrack.artist}</p>
            </div>
          </>
        ) : (
          <div className="no-track">Натисни на трек щоб почати</div>
        )}
      </div>

      <div className="player-controls">
        <div className="controls-buttons">
          <button className="control-btn" onClick={onPlayPrevious} title="Попередній трек">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 6 20 17 12 6 4"></polygon>
              <polygon points="17 4 17 20 19 20 19 4"></polygon>
            </svg>
          </button>
          <button 
            className={`control-btn play-btn ${isPlaying ? 'playing' : ''}`} 
            onClick={onTogglePlayPause}
            title={isPlaying ? 'Пауза' : 'Грати'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
          <button className="control-btn" onClick={onPlayNext} title="Наступний трек">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 6 20 17 12 6 4"></polygon>
            </svg>
          </button>
        </div>

        <div className="progress-bar-container">
          <span className="time">{formatTime(currentTime)}</span>
          <div 
            className="progress-bar" 
            onClick={handleProgressChange}
          >
            <div 
              className="progress-fill" 
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            />
            <div 
              className="progress-handle"
              style={{ left: `${(currentTime / duration) * 100 || 0}%` }}
            />
          </div>
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-extras">
        <button className="extra-btn" title="Перемішати">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7v6h6"></path>
            <path d="M21 17v-6h-6"></path>
            <path d="M7 7c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9"></path>
            <path d="M17 17c-2.5 2.5-6.5 2.5-9 0s-2.5-6.5 0-9"></path>
          </svg>
        </button>
        <button className="extra-btn" title="Повтор">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7v6h6"></path>
            <path d="M21 17v-6h-6"></path>
            <path d="M7 7c2.5-2.5 6.5-2.5 9 0s2.5 6.5 0 9"></path>
            <path d="M17 17c-2.5 2.5-6.5 2.5-9 0s-2.5-6.5 0-9"></path>
          </svg>
        </button>
        <button className="extra-btn" title="Гучність">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a7 7 0 0 1 0 9.9M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Player;
