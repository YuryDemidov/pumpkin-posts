import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt='Pumpkin Posts' height={48} />
      </Link>
    </div>
  )
}

export default Logo
