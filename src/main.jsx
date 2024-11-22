import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stage from './Stage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stage />
  </StrictMode>,
)
