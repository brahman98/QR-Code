import { useState } from 'react'
import Header from "./components/Header";
import QRCodeGen from "./components/QRCodeGen";
import Footer from "./components/Footer";
// import "./i18n"; // Подключаем настройки i18n


import "./styles/App.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Функция переключения темы
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <QRCodeGen />
      <hr className="hr" />
      <Footer />
    </div>
  );
}

export default App;
