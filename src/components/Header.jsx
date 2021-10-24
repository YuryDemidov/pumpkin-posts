import React, { useContext } from 'react'

import { AuthContext } from '../context'
import Button from './UI/Button/Button'
import Logo from './Logo'
import Navbar from './UI/Navbar/Navbar'

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const links = [
    {
      url: '/',
      text: 'Посты'
    },
    {
      url: '/about',
      text: 'О нас'
    }
  ]

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <header className='page-header'>
      <Logo />
      <Navbar links={links} />
      {isAuth && (
        <Button buttonType='primary' onClick={logOut}>
          Выйти
        </Button>
      )}
    </header>
  )
}

export default Header
