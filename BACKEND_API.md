# 🔌 Spotify Backend API Documentation

REST API сервер для управління музичною платформою StreamWave, побудований на Express.js з підтримкою улюблених, плейлистів та історії прослуховування.

## 🚀 Швидкий старт

### Установка та запуск

```bash
cd backend
npm install
npm start
```

Сервер буде доступний на `http://localhost:5000`

## 🔗 Base URL

```
http://localhost:5000/api
```

## 📚 API Endpoints

### 🎵 Треки (Tracks)

#### Отримати всі треки
```
GET /api/tracks
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sunny",
      "artist": "Bensound",
      "duration": 288,
      "genre": "Positive",
      "cover": "🎵",
      "url": "https://www.bensound.com/..."
    }
  ],
  "count": 8
}
```

#### Отримати трек за ID
```
GET /api/tracks/:id
```

**Parameters:**
- `id` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "title": "Sunny",
    "artist": "Bensound",
    "duration": 288,
    "genre": "Positive",
    "cover": "🎵",
    "url": "https://www.bensound.com/..."
  }
}
```

#### Пошук треків
```
GET /api/tracks/search/:query
```

**Parameters:**
- `query` (string) - Пошукова фраза (шукає по title, artist, genre)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sunny",
      "artist": "Bensound",
      "duration": 288,
      "genre": "Positive",
      "cover": "🎵",
      "url": "https://www.bensound.com/..."
    }
  ],
  "count": 1
}
```

---

### ❤️ Улюблені (Favorites)

#### Отримати улюблені треки користувача
```
GET /api/favorites/:userId
```

**Parameters:**
- `userId` (string) - User ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sunny",
      "artist": "Bensound",
      "duration": 288,
      "genre": "Positive",
      "cover": "🎵",
      "url": "https://www.bensound.com/..."
    }
  ],
  "count": 1
}
```

#### Додати до улюблених
```
POST /api/favorites/:userId/:trackId
```

**Parameters:**
- `userId` (string) - User ID
- `trackId` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "message": "Track added to favorites",
  "data": {
    "userId": "user_123",
    "trackId": "1",
    "total": 5
  }
}
```

#### Видалити з улюблених
```
DELETE /api/favorites/:userId/:trackId
```

**Parameters:**
- `userId` (string) - User ID
- `trackId` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "message": "Track removed from favorites",
  "data": {
    "userId": "user_123",
    "trackId": "1",
    "total": 4
  }
}
```

---

### 📋 Плейлисти (Playlists)

#### Отримати всі плейлисти користувача
```
GET /api/playlists/:userId
```

**Parameters:**
- `userId` (string) - User ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-1234",
      "name": "Мої улюблені",
      "tracks": ["1", "2", "3"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

#### Створити новий плейліст
```
POST /api/playlists/:userId
Content-Type: application/json

{
  "name": "Мій новий плейліст"
}
```

**Parameters:**
- `userId` (string) - User ID

**Body:**
- `name` (string, required) - Назва плейлісту

**Response:**
```json
{
  "success": true,
  "message": "Playlist created",
  "data": {
    "id": "uuid-1234",
    "name": "Мій новий плейліст",
    "tracks": [],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### Отримати треки плейлісту
```
GET /api/playlists/:userId/:playlistId/tracks
```

**Parameters:**
- `userId` (string) - User ID
- `playlistId` (string) - Playlist ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sunny",
      "artist": "Bensound",
      "duration": 288,
      "genre": "Positive",
      "cover": "🎵",
      "url": "https://www.bensound.com/..."
    }
  ],
  "count": 1
}
```

#### Додати трек до плейлісту
```
POST /api/playlists/:userId/:playlistId/tracks/:trackId
```

**Parameters:**
- `userId` (string) - User ID
- `playlistId` (string) - Playlist ID
- `trackId` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "message": "Track added to playlist",
  "data": {
    "playlistId": "uuid-1234",
    "trackId": "1",
    "total": 5
  }
}
```

#### Видалити трек з плейлісту
```
DELETE /api/playlists/:userId/:playlistId/tracks/:trackId
```

**Parameters:**
- `userId` (string) - User ID
- `playlistId` (string) - Playlist ID
- `trackId` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "message": "Track removed from playlist",
  "data": {
    "playlistId": "uuid-1234",
    "trackId": "1",
    "total": 4
  }
}
```

#### Видалити плейліст
```
DELETE /api/playlists/:userId/:playlistId
```

**Parameters:**
- `userId` (string) - User ID
- `playlistId` (string) - Playlist ID

**Response:**
```json
{
  "success": true,
  "message": "Playlist deleted"
}
```

---

### 📜 Історія (History)

#### Отримати історію прослуховування
```
GET /api/history/:userId
```

**Parameters:**
- `userId` (string) - User ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Sunny",
      "artist": "Bensound",
      "duration": 288,
      "genre": "Positive",
      "cover": "🎵",
      "url": "https://www.bensound.com/...",
      "playedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

#### Додати до історії
```
POST /api/history/:userId/:trackId
```

**Parameters:**
- `userId` (string) - User ID
- `trackId` (string) - Track ID

**Response:**
```json
{
  "success": true,
  "message": "Track added to history",
  "data": {
    "userId": "user_123",
    "trackId": "1",
    "total": 10
  }
}
```

#### Очистити історію
```
DELETE /api/history/:userId
```

**Parameters:**
- `userId` (string) - User ID

**Response:**
```json
{
  "success": true,
  "message": "History cleared"
}
```

---

### 🏥 Health Check

#### Перевірити статус сервера
```
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "uptime": 1234.56
}
```

---

## 👤 User ID Management

Сервер автоматично генерує User ID на основі часу та випадкового числа у форматі:
```
user_[timestamp]_[random]
```

User ID зберігається в localStorage браузера для подальших запитів.

### Отримати поточний User ID (із фронтенду)
```javascript
const userId = localStorage.getItem('userId');
```

---

## 🔒 Error Handling

Усі помилки повертаються з код статусу HTTP та JSON структурою:

```json
{
  "success": false,
  "message": "Error description"
}
```

**Статус коди:**
- `200` - Успіх
- `201` - Успішно створено
- `400` - Невірний запит
- `404` - Не знайдено
- `500` - Внутрішня помилка сервера

---

## 📝 Приклади використання

### cURL

**Отримати всі треки:**
```bash
curl http://localhost:5000/api/tracks
```

**Пошук:**
```bash
curl http://localhost:5000/api/tracks/search/sunny
```

**Додати до улюблених:**
```bash
curl -X POST http://localhost:5000/api/favorites/user_123/1
```

**Створити плейліст:**
```bash
curl -X POST http://localhost:5000/api/playlists/user_123 \
  -H "Content-Type: application/json" \
  -d '{"name": "Мій плейліст"}'
```

### JavaScript (Fetch API)

```javascript
// Отримати всі треки
const tracks = await fetch('http://localhost:5000/api/tracks')
  .then(res => res.json());

// Додати до улюблених
await fetch('http://localhost:5000/api/favorites/user_123/1', {
  method: 'POST'
});

// Створити плейліст
const playlist = await fetch('http://localhost:5000/api/playlists/user_123', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Мій плейліст' })
}).then(res => res.json());
```

---

## 🔧 Налаштування

### Environment Variables

Створіть файл `backend/.env`:
```
PORT=5000
NODE_ENV=development
```

### CORS Configuration

API підтримує CORS для всіх origen. Налаштувати в `server.js`:
```javascript
app.use(cors());
```

---

## 📊 Data Storage

На цей момент дані зберігаються в пам'яті (in-memory). Для продакшену рекомендується використати базу даних:

**Можливі варіанти:**
- MongoDB
- PostgreSQL
- MySQL
- Firebase

---

## 🚀 Deployment

### Vercel, Heroku, або інші хмарні сервіси

1. Встановіть залежності
2. Запустіть `npm start`
3. Переконайтеся, що PORT змінна встановлена у вашого хостинга

---

## 📞 Support

Для питань та проблем використовуйте:
- Issues на GitHub
- Email: support@streamwave.app

---

**Версія**: 1.0.0  
**Останнє оновлення**: Січень 2024
