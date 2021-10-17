import React from 'react'
import cn from 'classnames'

import classes from './Input.module.scss'

const Input = ({ className, ...props }) => {
  return (
    <input className={cn(classes.input, className)} {...props} />
  )
}

export default Input
