import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Routes.tsx'
import {  CartConextProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartConextProvider> 
    <RouterProvider router={router} />
    </CartConextProvider>
  </StrictMode>,
)
