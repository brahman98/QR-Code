import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/App.scss'
import App from './App.jsx'
import './i18n/i18n.js'  // подключаем i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
