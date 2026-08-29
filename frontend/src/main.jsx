import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppContextProvider>
    <AuthProvider>
      <Toaster position='top-right' />
      <App />
      </AuthProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
