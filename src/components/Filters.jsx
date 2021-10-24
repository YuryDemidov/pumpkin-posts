import React from 'react'

import LimitChanger from './LimitChanger'
import Search from './Search'
import Sorting from './Sorting'

const Filters = ({ filter, setFilter, postsPerPage, setPostsPerPage, sortingOptions }) => {
  const sort = sortingType => {
    setFilter({ ...filter, sorting: sortingOptions.find(sorting => sorting.value === sortingType) })
  }
  const search = term => {
    setFilter({ ...filter, term })
  }

  return (
    <div className='filters'>
      <LimitChanger limit={postsPerPage} onChange={setPostsPerPage} />
      <Sorting sortingOptions={sortingOptions} selectedSorting={filter.sorting} onChange={sort} />
      <Search term={filter.term} onChange={search} />
    </div>
  )
}

export default Filters
