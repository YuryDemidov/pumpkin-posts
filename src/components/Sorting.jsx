import React, { useState } from 'react'

import Select from './UI/Select/Select'

const Sorting = ({ onChange }) => {
  const sortingOptions = [
    { value: 'new', name: 'Сначала новые' },
    { value: 'old', name: 'Сначала старые' },
    { value: 'random', name: 'Случайная' },
    { value: 'alphabetical', name: 'По алфавиту' }
  ]
  const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0])

  const changeSorting = sortingValue => {
    setSelectedSorting(sortingOptions.find(sorting => sorting.value === sortingValue))
    onChange(sortingValue)
  }

  return (
    <div className='sorting'>
      <label htmlFor='postsSorting'>Сортировка</label>
      <Select
        id='postsSorting'
        className='sorting__select'
        name='posts-sorting'
        options={sortingOptions}
        value={selectedSorting.value}
        onChange={changeSorting}
      />
    </div>
  )
}

export default Sorting
