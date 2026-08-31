import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Statique from './weather/Statique.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Statique/>
  </StrictMode>
)
