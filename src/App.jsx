import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter'
import AppBackground from './components/AppBackground'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <AppBackground />
    </BrowserRouter>
  )
}

export default App
