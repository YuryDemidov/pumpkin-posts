import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <main className='page error-page'>
      <h1>🎃 Ничего не найдено! 🎃</h1>
      <NavLink className='link' to='/'>
        Вернуться на главную
      </NavLink>
    </main>
  )
}

export default Error
