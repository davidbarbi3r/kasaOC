import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContentfulProvider } from './hook/useContentful.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentfulProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContentfulProvider>
  </React.StrictMode>,
)
