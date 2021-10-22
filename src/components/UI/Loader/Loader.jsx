import React from 'react'

import classes from './Loader.module.scss'

const Loader = () => {
  return <div className={classes.loader} aria-label='Идёт загрузка...' />
}

export default Loader
