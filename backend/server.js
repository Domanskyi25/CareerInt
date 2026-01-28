const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (in production, use a database)
const storage = {
  tracks: [
    {
      id: '1',
      title: 'Sunny',
      artist: 'Bensound',
      duration: 288,
      genre: 'Positive',
      cover: '🎵',
      url: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
    },
    {
      id: '2',
      title: 'Ukulele',
      artist: 'Bensound',
      duration: 240,
      genre: 'Indie',
      cover: '🎸',
      url: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3'
    },
    {
      id: '3',
      title: 'Romantic',
      artist: 'Bensound',
      duration: 276,
      genre: 'Romantic',
      cover: '💕',
      url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3'
    },
    {
      id: '4',
      title: 'Retro Soul',
      artist: 'Bensound',
      duration: 264,
      genre: 'Soul',
      cover: '🎷',
      url: 'https://www.bensound.com/bensound-music/bensound-retro-soul.mp3'
    },
    {
      id: '5',
      title: 'Electronia',
      artist: 'Bensound',
      duration: 300,
      genre: 'Electronic',
      cover: '⚡',
      url: 'https://www.bensound.com/bensound-music/bensound-electronia.mp3'
    },
    {
      id: '6',
      title: 'Funkywalk',
      artist: 'Bensound',
      duration: 246,
      genre: 'Funk',
      cover: '🕺',
      url: 'https://www.bensound.com/bensound-music/bensound-funkywalk.mp3'
    },
    {
      id: '7',
      title: 'Deepdive',
      artist: 'Bensound',
      duration: 360,
      genre: 'Chill',
      cover: '🌊',
      url: 'https://www.bensound.com/bensound-music/bensound-deepdive.mp3'
    },
    {
      id: '8',
      title: 'Shady Lane',
      artist: 'Bensound',
      duration: 276,
      genre: 'Indie',
      cover: '🌙',
      url: 'https://www.bensound.com/bensound-music/bensound-shady-lane.mp3'
    }
  ],
  users: {},
  playlists: {},
  favorites: {},
  history: {}
};

// ==================== TRACKS ENDPOINTS ====================

// Get all tracks
app.get('/api/tracks', (req, res) => {
  res.json({
    success: true,
    data: storage.tracks,
    count: storage.tracks.length
  });
});

// Get track by ID
app.get('/api/tracks/:id', (req, res) => {
  const track = storage.tracks.find(t => t.id === req.params.id);
  
  if (!track) {
    return res.status(404).json({
      success: false,
      message: 'Track not found'
    });
  }
  
  res.json({
    success: true,
    data: track
  });
});

// Search tracks
app.get('/api/tracks/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = storage.tracks.filter(track =>
    track.title.toLowerCase().includes(query) ||
    track.artist.toLowerCase().includes(query) ||
    track.genre.toLowerCase().includes(query)
  );
  
  res.json({
    success: true,
    data: results,
    count: results.length
  });
});

// ==================== FAVORITES ENDPOINTS ====================

// Get user favorites
app.get('/api/favorites/:userId', (req, res) => {
  const userId = req.params.userId;
  const favorites = storage.favorites[userId] || [];
  const favoriteTracks = favorites.map(id => 
    storage.tracks.find(t => t.id === id)
  ).filter(Boolean);
  
  res.json({
    success: true,
    data: favoriteTracks,
    count: favoriteTracks.length
  });
});

// Add to favorites
app.post('/api/favorites/:userId/:trackId', (req, res) => {
  const { userId, trackId } = req.params;
  
  if (!storage.favorites[userId]) {
    storage.favorites[userId] = [];
  }
  
  if (!storage.favorites[userId].includes(trackId)) {
    storage.favorites[userId].push(trackId);
  }
  
  res.json({
    success: true,
    message: 'Track added to favorites',
    data: {
      userId,
      trackId,
      total: storage.favorites[userId].length
    }
  });
});

// Remove from favorites
app.delete('/api/favorites/:userId/:trackId', (req, res) => {
  const { userId, trackId } = req.params;
  
  if (!storage.favorites[userId]) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const index = storage.favorites[userId].indexOf(trackId);
  if (index > -1) {
    storage.favorites[userId].splice(index, 1);
  }
  
  res.json({
    success: true,
    message: 'Track removed from favorites',
    data: {
      userId,
      trackId,
      total: storage.favorites[userId].length
    }
  });
});

// ==================== PLAYLIST ENDPOINTS ====================

// Get user playlists
app.get('/api/playlists/:userId', (req, res) => {
  const userId = req.params.userId;
  const userPlaylists = storage.playlists[userId] || {};
  
  res.json({
    success: true,
    data: Object.values(userPlaylists),
    count: Object.keys(userPlaylists).length
  });
});

// Create playlist
app.post('/api/playlists/:userId', (req, res) => {
  const userId = req.params.userId;
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Playlist name is required'
    });
  }
  
  if (!storage.playlists[userId]) {
    storage.playlists[userId] = {};
  }
  
  const playlistId = uuidv4();
  storage.playlists[userId][playlistId] = {
    id: playlistId,
    name,
    tracks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  res.status(201).json({
    success: true,
    message: 'Playlist created',
    data: storage.playlists[userId][playlistId]
  });
});

// Get playlist tracks
app.get('/api/playlists/:userId/:playlistId/tracks', (req, res) => {
  const { userId, playlistId } = req.params;
  
  if (!storage.playlists[userId] || !storage.playlists[userId][playlistId]) {
    return res.status(404).json({
      success: false,
      message: 'Playlist not found'
    });
  }
  
  const trackIds = storage.playlists[userId][playlistId].tracks;
  const tracks = trackIds.map(id => 
    storage.tracks.find(t => t.id === id)
  ).filter(Boolean);
  
  res.json({
    success: true,
    data: tracks,
    count: tracks.length
  });
});

// Add track to playlist
app.post('/api/playlists/:userId/:playlistId/tracks/:trackId', (req, res) => {
  const { userId, playlistId, trackId } = req.params;
  
  if (!storage.playlists[userId] || !storage.playlists[userId][playlistId]) {
    return res.status(404).json({
      success: false,
      message: 'Playlist not found'
    });
  }
  
  const playlist = storage.playlists[userId][playlistId];
  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
    playlist.updatedAt = new Date().toISOString();
  }
  
  res.json({
    success: true,
    message: 'Track added to playlist',
    data: {
      playlistId,
      trackId,
      total: playlist.tracks.length
    }
  });
});

// Remove track from playlist
app.delete('/api/playlists/:userId/:playlistId/tracks/:trackId', (req, res) => {
  const { userId, playlistId, trackId } = req.params;
  
  if (!storage.playlists[userId] || !storage.playlists[userId][playlistId]) {
    return res.status(404).json({
      success: false,
      message: 'Playlist not found'
    });
  }
  
  const playlist = storage.playlists[userId][playlistId];
  const index = playlist.tracks.indexOf(trackId);
  if (index > -1) {
    playlist.tracks.splice(index, 1);
    playlist.updatedAt = new Date().toISOString();
  }
  
  res.json({
    success: true,
    message: 'Track removed from playlist',
    data: {
      playlistId,
      trackId,
      total: playlist.tracks.length
    }
  });
});

// Delete playlist
app.delete('/api/playlists/:userId/:playlistId', (req, res) => {
  const { userId, playlistId } = req.params;
  
  if (!storage.playlists[userId] || !storage.playlists[userId][playlistId]) {
    return res.status(404).json({
      success: false,
      message: 'Playlist not found'
    });
  }
  
  delete storage.playlists[userId][playlistId];
  
  res.json({
    success: true,
    message: 'Playlist deleted'
  });
});

// ==================== HISTORY ENDPOINTS ====================

// Get user history
app.get('/api/history/:userId', (req, res) => {
  const userId = req.params.userId;
  const history = storage.history[userId] || [];
  
  res.json({
    success: true,
    data: history.slice(0, 50), // Last 50 tracks
    count: history.length
  });
});

// Add to history
app.post('/api/history/:userId/:trackId', (req, res) => {
  const { userId, trackId } = req.params;
  
  if (!storage.history[userId]) {
    storage.history[userId] = [];
  }
  
  const track = storage.tracks.find(t => t.id === trackId);
  if (!track) {
    return res.status(404).json({
      success: false,
      message: 'Track not found'
    });
  }
  
  // Add with timestamp
  storage.history[userId].unshift({
    ...track,
    playedAt: new Date().toISOString()
  });
  
  // Keep only last 100 tracks
  if (storage.history[userId].length > 100) {
    storage.history[userId] = storage.history[userId].slice(0, 100);
  }
  
  res.json({
    success: true,
    message: 'Track added to history',
    data: {
      userId,
      trackId,
      total: storage.history[userId].length
    }
  });
});

// Clear history
app.delete('/api/history/:userId', (req, res) => {
  const userId = req.params.userId;
  storage.history[userId] = [];
  
  res.json({
    success: true,
    message: 'History cleared'
  });
});

// ==================== HEALTH CHECK ====================

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    uptime: process.uptime()
  });
});

// ==================== ERROR HANDLING ====================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎵 Spotify Backend Server running on http://localhost:${PORT}`);
  console.log('API Documentation available at http://localhost:5000/api/health');
});
