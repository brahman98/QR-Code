import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Тексты для каждого языка
const resources = {
  ru: {
    translation: {
      "headerTitle": "Генератор QR-кодов",
      "footerText": "Создано Виктором",
      "placeholder": "Введите текст...",
      "generate": "Сгенерировать",
      "download": "Скачать"
    }
  },
  en: {
    translation: {
      "headerTitle": "QR Code Generator",
      "footerText": "Made by Виктор",
      "placeholder": "Enter text...",
      "generate": "Generate",
      "download": "Download"
    }
  }
};

// Инициализация i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // язык по умолчанию
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
