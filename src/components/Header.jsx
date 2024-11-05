// import React from 'react';
import moonIcon from "../../img/moon.svg"; // Иконка для светлого режима
import sunIcon from "../../img/light_mode.svg"; // Иконка для темного режима

function Header({ toggleTheme, darkMode }) {
  return (
    <header className="header">
        <a href="/index.html" className="header__logo">
          <img src="img/qrcode.JPG" alt="QR-Code Logo" />
          <h1>QRcode2025.ru</h1>
        </a>
        <div className="header__icons">
          <img id="themeToggle" src={darkMode ? sunIcon : moonIcon} alt="Toggle Theme" onClick={toggleTheme}/>
          {/* <details className="lang-dropdown">
            <summary className="lang-toggle">
              <img
                id="langToggle"
                src={darkMode ? "img/language.svg" : "img/globe-solid.svg"}
                alt="Change Language"
              />
              <span className="header__lang">Ru</span>
            </summary>
            <ul className="lang-options">
              <li data-lang="ru">Ru</li>
              <li data-lang="eng">Eng</li>
            </ul>
          </details> */}
        </div>
      </header>
  );
}

export default Header;
