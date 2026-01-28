const API_BASE_URL = 'http://localhost:5000/api';

// Generate or get user ID
const getUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }
  return userId;
};

export const apiService = {
  // ==================== TRACKS ====================
  
  getAllTracks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tracks`);
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching tracks:', error);
      return [];
    }
  },

  getTrack: async (trackId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tracks/${trackId}`);
      const data = await response.json();
      return data.success ? data.data : null;
    } catch (error) {
      console.error('Error fetching track:', error);
      return null;
    }
  },

  searchTracks: async (query) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tracks/search/${encodeURIComponent(query)}`);
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error searching tracks:', error);
      return [];
    }
  },

  // ==================== FAVORITES ====================

  getFavorites: async () => {
    try {
      const userId = getUserId();
      const response = await fetch(`${API_BASE_URL}/favorites/${userId}`);
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  },

  addToFavorites: async (trackId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/favorites/${userId}/${trackId}`,
        { method: 'POST' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return false;
    }
  },

  removeFromFavorites: async (trackId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/favorites/${userId}/${trackId}`,
        { method: 'DELETE' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return false;
    }
  },

  // ==================== PLAYLISTS ====================

  getPlaylists: async () => {
    try {
      const userId = getUserId();
      const response = await fetch(`${API_BASE_URL}/playlists/${userId}`);
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching playlists:', error);
      return [];
    }
  },

  createPlaylist: async (name) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/playlists/${userId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        }
      );
      const data = await response.json();
      return data.success ? data.data : null;
    } catch (error) {
      console.error('Error creating playlist:', error);
      return null;
    }
  },

  getPlaylistTracks: async (playlistId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/playlists/${userId}/${playlistId}/tracks`
      );
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching playlist tracks:', error);
      return [];
    }
  },

  addToPlaylist: async (playlistId, trackId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/playlists/${userId}/${playlistId}/tracks/${trackId}`,
        { method: 'POST' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error adding track to playlist:', error);
      return false;
    }
  },

  removeFromPlaylist: async (playlistId, trackId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/playlists/${userId}/${playlistId}/tracks/${trackId}`,
        { method: 'DELETE' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error removing track from playlist:', error);
      return false;
    }
  },

  deletePlaylist: async (playlistId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/playlists/${userId}/${playlistId}`,
        { method: 'DELETE' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error deleting playlist:', error);
      return false;
    }
  },

  // ==================== HISTORY ====================

  getHistory: async () => {
    try {
      const userId = getUserId();
      const response = await fetch(`${API_BASE_URL}/history/${userId}`);
      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching history:', error);
      return [];
    }
  },

  addToHistory: async (trackId) => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/history/${userId}/${trackId}`,
        { method: 'POST' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error adding to history:', error);
      return false;
    }
  },

  clearHistory: async () => {
    try {
      const userId = getUserId();
      const response = await fetch(
        `${API_BASE_URL}/history/${userId}`,
        { method: 'DELETE' }
      );
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error clearing history:', error);
      return false;
    }
  }
};
