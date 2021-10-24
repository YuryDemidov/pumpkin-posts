import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context'
import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

const Login = () => {
  const history = useHistory()
  const { setIsAuth } = useContext(AuthContext)
  const authUser = evt => {
    evt.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', '1')
    history.push('/')
  }

  return (
    <main className='page login-page'>
      <form className='login-form' action='#' onSubmit={authUser}>
        <Input className='login-form__input' name='name' placeholder='Имя' aria-label='Имя' />
        <Input className='login-form__input' type='password' name='password' placeholder='Пароль' aria-label='Пароль' />
        <Button buttonType='primary' isSubmitter>
          Авторизоваться
        </Button>
      </form>
    </main>
  )
}

export default Login
