import React from 'react';
import '../styles/App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#grad)" strokeWidth="3"/>
          
          {/* Play button shape */}
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="60" fill="rgba(29, 185, 84, 0.1)"/>
            <polygon points="-20,-35 -20,35 35,0" fill="#1db954" transform="scale(1.2)"/>
          </g>
          
          {/* Sound waves */}
          <g transform="translate(100, 100)" stroke="#1ed760" strokeWidth="2.5" fill="none">
            <path d="M -50 -25 Q -45 -35 -40 -25" opacity="0.6"/>
            <path d="M -30 -35 Q -25 -48 -20 -35" opacity="0.8"/>
            <path d="M -10 -40 Q -5 -55 0 -40" opacity="1"/>
          </g>
          
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1db954" />
              <stop offset="100%" stopColor="#1ed760" />
            </linearGradient>
          </defs>
        </svg>
        <h1>StreamWave</h1>
      </div>
      
      <nav className="nav">
        <div className="nav-section">
          <h3>МЕНЮ</h3>
          <ul>
            <li className="nav-item active">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 10.26 24 12.52 17.77 18.77 19.24 27.97 12 23.77 4.76 27.97 6.23 18.77 0 12.52 8.91 10.26 12 2"></polygon>
              </svg>
              <span>Головна</span>
            </li>
            <li className="nav-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <span>Пошук</span>
            </li>
            <li className="nav-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Вподобані</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3>ДОБІРКИ</h3>
          <ul>
            <li className="nav-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <span>Топ треки</span>
            </li>
            <li className="nav-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              <span>Нові релізи</span>
            </li>
            <li className="nav-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H7v2h2V11zm4 0h-2v2h2V11zm4 0h-2v2h2V11zM7 7h10v2H7V7z"></path>
              </svg>
              <span>Плейлисти</span>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <button className="settings-btn">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"></circle>
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24"></path>
          </svg>
          <span>Налаштування</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
