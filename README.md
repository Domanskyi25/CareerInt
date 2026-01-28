# 🎵 StreamWave - Modern Music Streaming Platform

Полнофункціональна платформа для потокового прослуховування музики, побудована на React та Node.js/Express з підтримкою синхронізації даних.

## ✨ Особливості

- 🎧 **Потокове прослуховування** - HTML5 Audio API з реальними треками Bensound
- 🎨 **Сучасний темний дизайн** - на основі Spotify, професійна палітра
- ❤️ **Улюблені треки** - збереження в localStorage та синхронізація з бекендом
- 📋 **Створення плейлистів** - управління користувацькими плейлистами
- 📜 **Історія прослуховування** - відстеження слуханих треків
- 🔍 **Пошук і фільтрація** - по назві, виконавцю, жанру
- 🎮 **Усі контролі плеєра** - Play/Pause, Next/Prev, Seek, Volume, Shuffle, Repeat
- 📱 **Адаптивний дизайн** - оптимізація для мобілів та планшетів
- 🔌 **REST API** - бекенд для хмарного збереження даних

## 🛠 Технологічний стек

**Фронтенд:**
- React 18.2.0
- CSS3 з Flexbox та Grid
- HTML5 Audio API
- localStorage

**Бекенд:**
- Node.js
- Express 4.18.2
- CORS для кросс-походження запитів
- UUID для генерування ID

## 📋 Передумови

- Node.js (v14 або вище)
- npm або yarn

## 🚀 Встановлення та запуск

### 1. Встановлення залежностей

**Фронтенд:**
```bash
npm install
```

**Бекенд:**
```bash
cd backend
npm install
cd ..
```

### 2. Запуск

**Термінал 1 - React фронтенд:**
```bash
npm start
```
Додаток буде доступний на `http://localhost:3000`

**Термінал 2 - Express бекенд:**
```bash
cd backend
npm start
```
API буде доступний на `http://localhost:5000`

## 📦 Структура проекту

```
Test-Project/
├── src/
│   ├── components/
│   │   ├── App.js              # Головний компонент
│   │   ├── Sidebar.js          # Навігація та логотип
│   │   ├── MainContent.js      # Основний вміст, пошук
│   │   ├── TrackCard.js        # Картка треку з улюбленим
│   │   └── Player.js           # Музичний плеєр
│   ├── styles/
│   │   ├── App.css
│   │   ├── Sidebar.css
│   │   ├── MainContent.css
│   │   ├── TrackCard.css
│   │   └── Player.css
│   ├── utils/
│   │   ├── storageManager.js   # localStorage утиліти
│   │   └── apiService.js       # REST API клієнт
│   └── data/
│       └── tracks.js           # Дані треків
├── backend/
│   ├── server.js               # Express сервер
│   ├── package.json
│   └── node_modules/
└── package.json
```

## 🔌 REST API Endpoints

### Треки
- `GET /api/tracks` - Отримати всі треки
- `GET /api/tracks/:id` - Отримати трек за ID
- `GET /api/tracks/search/:query` - Пошук треків

### Улюблені
- `GET /api/favorites/:userId` - Отримати улюблені треки
- `POST /api/favorites/:userId/:trackId` - Додати до улюблених
- `DELETE /api/favorites/:userId/:trackId` - Видалити з улюблених

### Плейлисти
- `GET /api/playlists/:userId` - Отримати всі плейлисти
- `POST /api/playlists/:userId` - Створити новий плейліст
- `GET /api/playlists/:userId/:playlistId/tracks` - Отримати треки плейлісту
- `POST /api/playlists/:userId/:playlistId/tracks/:trackId` - Додати трек до плейлісту
- `DELETE /api/playlists/:userId/:playlistId/tracks/:trackId` - Видалити трек з плейлісту
- `DELETE /api/playlists/:userId/:playlistId` - Видалити плейліст

### Історія
- `GET /api/history/:userId` - Отримати історію прослуховування
- `POST /api/history/:userId/:trackId` - Додати до історії
- `DELETE /api/history/:userId` - Очистити історію

## 🎨 Колірна схема

- **Основний зелений**: `#1db954`
- **Світлий зелений**: `#1ed760`
- **Темна основа**: `#0f0f0f`
- **Вторинна основа**: `#121212`

## 📝 Утиліти

### storageManager.js (localStorage)
```javascript
favoritesManager.toggleFavorite(trackId)
historyManager.addToHistory(track)
playlistsManager.createPlaylist(name)
searchManager.search(query, tracks)
```

### apiService.js (REST API)
```javascript
apiService.getAllTracks()
apiService.getFavorites()
apiService.createPlaylist(name)
apiService.getHistory()
```

## 🎵 Музичні треки (Bensound)

Усі треки ліцензовані під Creative Commons від Bensound:
1. Sunny - Positive
2. Ukulele - Indie
3. Romantic - Romantic
4. Retro Soul - Soul
5. Electronia - Electronic
6. Funkywalk - Funk
7. Deepdive - Chill
8. Shady Lane - Indie

## 🔧 Розробка

### Побудова для продакшену:
```bash
npm run build
```

## 📱 Адаптивність

Платформа повністю адаптивна для:
- 📱 Мобільних телефонів (320px+)
- 📱 Планшетів (768px+)
- 💻 Настільних комп'ютерів (1024px+)

## 🚀 Майбутні особливості

- [ ] Реєстрація та аутентифікація користувачів
- [ ] База даних (MongoDB/PostgreSQL)
- [ ] Завантаження власних треків
- [ ] Соціальне поділення та спільні плейлисти
- [ ] Рекомендаційний алгоритм
- [ ] Аудіовізуалізація
- [ ] Мобільне додаток
- [ ] Синхронізація між пристроями

## 📄 Ліцензія

MIT

---

Приємного прослуховування! 🎵
