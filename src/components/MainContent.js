import React, { useState } from 'react';
import '../styles/MainContent.css';
import TrackCard from './TrackCard';
import { TRACKS } from '../data/tracks';

function MainContent({ onPlayTrack }) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    { id: 'all', name: 'Усі' },
    { id: 'pop', name: 'Pop' },
    { id: 'rock', name: 'Rock' },
    { id: 'electronic', name: 'Electronic' },
    { id: 'hiphop', name: 'Hip-Hop' },
  ];

  let filteredTracks = selectedGenre === 'all' 
    ? TRACKS 
    : TRACKS.filter(track => track.genre === selectedGenre);

  if (searchQuery) {
    filteredTracks = filteredTracks.filter(track =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <main className="main-content">
      <div className="header">
        <h2>Музика</h2>
        <p>Відкрий світ звуків</p>
      </div>

      <div className="search-container">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Пошук треків або виконавців..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search" onClick={() => setSearchQuery('')}>
            ✕
          </button>
        )}
      </div>

      <div className="genre-filter">
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`genre-btn ${selectedGenre === genre.id ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {filteredTracks.length > 0 ? (
        <section className="tracks-section">
          <h3>Результати ({filteredTracks.length})</h3>
          <div className="tracks-grid">
            {filteredTracks.map(track => (
              <TrackCard
                key={track.id}
                track={track}
                onPlay={() => onPlayTrack(track, filteredTracks)}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>Треків не знайдено</p>
        </div>
      )}

      <section className="playlists-section">
        <h3>Популярні плейлисти</h3>
        <div className="playlists-grid">
          <div className="playlist-card">
            <div className="playlist-cover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path>
              </svg>
            </div>
            <h4>Топ 50 Світу</h4>
            <p>Найпопулярніші треки світу</p>
          </div>
          <div className="playlist-card">
            <div className="playlist-cover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 18v3H5v-3m4-4v2H5v-2m4-4v2H5v-2M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
              </svg>
            </div>
            <h4>Нічні Гіти</h4>
            <p>Для вечорів та ночей</p>
          </div>
          <div className="playlist-card">
            <div className="playlist-cover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h4>Енергія</h4>
            <p>Активні композиції для тренування</p>
          </div>
          <div className="playlist-card">
            <div className="playlist-cover">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h4>Романтичні</h4>
            <p>Чутливі мелодії</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
