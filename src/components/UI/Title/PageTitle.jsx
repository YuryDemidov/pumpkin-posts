import React from 'react'

import classes from './PageTitle.module.scss'

const PageTitle = ({ children }) => <h1 className={classes.title}>{children}</h1>

export default PageTitle
