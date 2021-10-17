import React from 'react'
import cn from 'classnames'

import classes from './Button.module.scss'

const Button = ({ children, buttonType, isSubmitter, ...props }) => {
  return (
    <button className={cn(classes.button, classes[buttonType])} type={isSubmitter ? 'submit' : 'button'} {...props}>
      {children}
    </button>
  )
}

export default Button
