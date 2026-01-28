import React, { useState, useEffect } from 'react';
import '../styles/TrackCard.css';
import { favoritesManager } from '../utils/storageManager';

function TrackCard({ track, onPlay }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesManager.isFavorite(track.id));
  }, [track.id]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const newState = favoritesManager.toggleFavorite(track.id);
    setIsFavorite(newState);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    onPlay();
  };

  return (
    <div className="track-card" onClick={onPlay}>
      <div className="track-cover">
        <div className="cover-content">{track.cover}</div>
        <button className="play-overlay" onClick={handlePlayClick}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>
      <div className="track-info">
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
        <div className="track-meta">
          <span className="genre">{track.genre}</span>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
          >
            <svg viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
