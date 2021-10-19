import React from 'react'

import Select from './UI/Select/Select'

const Sorting = ({ sortingOptions, selectedSorting, onChange }) => {
  return (
    <>
      <label htmlFor='postsSorting'>Сортировка</label>
      <Select
        id='postsSorting'
        className='filters__sorting'
        name='posts-sorting'
        options={sortingOptions}
        value={selectedSorting.value}
        onChange={onChange}
      />
    </>
  )
}

export default Sorting
