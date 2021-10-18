import React from 'react'
import cn from 'classnames'

import classes from './Select.module.scss'

const Select = ({ options, className, value, onChange, ...props }) => {
  return (
    <select
      className={cn(classes.select, className)}
      value={value}
      onChange={evt => onChange(evt.target.value)}
      {...props}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
