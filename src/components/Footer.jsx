// import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <div className="header__logo">
          <img src="img/qrcode.JPG" alt="QR-Code Logo" />
          <h1>QR-Code</h1>
        </div>
        <p className="p__text">
          loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
          amet dui iaculis ex efficitur ultricies ac nec neque. Sed elementum
          lectus vel.
        </p>
        <div className="footer__nav">
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Вопросы/Ответы</a>
          <a href="#">Условия использования</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="social__media">
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
        <p>© QRcode2025.ru</p>
      </footer>
  );
}

export default Footer;
