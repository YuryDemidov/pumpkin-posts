import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthContext } from './context'
import AppRouter from './components/AppRouter'
import AppBackground from './components/AppBackground'
import Header from './components/Header'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <AppBackground />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
