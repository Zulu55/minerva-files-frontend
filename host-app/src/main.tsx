import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PagesRouter } from './routes'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <PagesRouter />
    </BrowserRouter>
  </StrictMode>,
)
