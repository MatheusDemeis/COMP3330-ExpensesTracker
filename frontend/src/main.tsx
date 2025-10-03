import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouter, router } from './router' // make sure you exported AppRouter

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />   {/* ✅ Use AppRouter instead of App */}
    </QueryClientProvider>
  </React.StrictMode>,
)
