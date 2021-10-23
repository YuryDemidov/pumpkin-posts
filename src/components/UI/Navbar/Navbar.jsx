import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import classes from './Navbar.module.scss'

const Navbar = ({ links }) => {
  return (
    <ul className={classes.wrapper}>
      {links.map(link => (
        <li key={link.url}>
          <NavLink className={cn('link', classes.item)} to={link.url}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navbar
