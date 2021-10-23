import React from 'react'

import Logo from './Logo'
import Navbar from './UI/Navbar/Navbar'

const Header = () => {
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

  return (
    <header className='page-header'>
      <Logo />
      <Navbar links={links} />
    </header>
  )
}

export default Header
