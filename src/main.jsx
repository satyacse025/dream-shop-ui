import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider> 
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </AuthProvider>
  
  </StrictMode>,
)
