// Local Storage Management
const STORAGE_KEYS = {
  FAVORITES: 'streamwave_favorites',
  HISTORY: 'streamwave_history',
  PLAYLISTS: 'streamwave_playlists',
};

// Favorites Management
export const favoritesManager = {
  getFavorites: () => {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return stored ? JSON.parse(stored) : [];
  },

  addFavorite: (trackId) => {
    const favorites = favoritesManager.getFavorites();
    if (!favorites.includes(trackId)) {
      favorites.push(trackId);
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  },

  removeFavorite: (trackId) => {
    const favorites = favoritesManager.getFavorites();
    const filtered = favorites.filter(id => id !== trackId);
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
  },

  isFavorite: (trackId) => {
    const favorites = favoritesManager.getFavorites();
    return favorites.includes(trackId);
  },

  toggleFavorite: (trackId) => {
    if (favoritesManager.isFavorite(trackId)) {
      favoritesManager.removeFavorite(trackId);
      return false;
    } else {
      favoritesManager.addFavorite(trackId);
      return true;
    }
  },
};

// History Management
export const historyManager = {
  getHistory: () => {
    const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return stored ? JSON.parse(stored) : [];
  },

  addToHistory: (track) => {
    const history = historyManager.getHistory();
    const filtered = history.filter(t => t.id !== track.id);
    const newHistory = [{ ...track, playedAt: new Date().toISOString() }, ...filtered].slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory));
  },

  clearHistory: () => {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  },
};

// Playlists Management
export const playlistsManager = {
  getPlaylists: () => {
    const stored = localStorage.getItem(STORAGE_KEYS.PLAYLISTS);
    return stored ? JSON.parse(stored) : [];
  },

  createPlaylist: (name) => {
    const playlists = playlistsManager.getPlaylists();
    const newPlaylist = {
      id: Date.now(),
      name,
      tracks: [],
      createdAt: new Date().toISOString(),
    };
    playlists.push(newPlaylist);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
    return newPlaylist;
  },

  addToPlaylist: (playlistId, trackId) => {
    const playlists = playlistsManager.getPlaylists();
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist && !playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
    }
  },

  removeFromPlaylist: (playlistId, trackId) => {
    const playlists = playlistsManager.getPlaylists();
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist) {
      playlist.tracks = playlist.tracks.filter(id => id !== trackId);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
    }
  },

  deletePlaylist: (playlistId) => {
    const playlists = playlistsManager.getPlaylists();
    const filtered = playlists.filter(p => p.id !== playlistId);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(filtered));
  },
};

// Search Manager
export const searchManager = {
  search: (query, tracks) => {
    if (!query.trim()) return tracks;
    
    const lowerQuery = query.toLowerCase();
    return tracks.filter(track =>
      track.title.toLowerCase().includes(lowerQuery) ||
      track.artist.toLowerCase().includes(lowerQuery) ||
      track.genre.toLowerCase().includes(lowerQuery)
    );
  },

  filterByGenre: (tracks, genre) => {
    if (genre === 'all') return tracks;
    return tracks.filter(track => track.genre === genre);
  },

  filterByDuration: (tracks, minDuration, maxDuration) => {
    return tracks.filter(track => {
      const duration = track.durationSeconds;
      return duration >= minDuration && duration <= maxDuration;
    });
  },
};

export default {
  favoritesManager,
  historyManager,
  playlistsManager,
  searchManager,
};
