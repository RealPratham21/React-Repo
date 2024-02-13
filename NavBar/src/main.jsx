import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/547d1da85a.js';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
