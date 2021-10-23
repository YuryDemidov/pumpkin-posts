import React, { useMemo } from 'react'
import cn from 'classnames'

import Button from '../Button/Button'
import classes from './Pagination.module.scss'

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pagesArray = useMemo(() => [...Array(totalPages)], [totalPages])
  return (
    <ul className={classes.pagination}>
      {pagesArray.map((_, i) => (
        <Button
          className={cn(classes.pageButton, { [classes.active]: currentPage === i + 1 })}
          key={i}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
    </ul>
  )
}

export default Pagination
