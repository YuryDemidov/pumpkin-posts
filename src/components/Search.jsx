import React from 'react'

import Input from './UI/Input/Input'

const Search = ({ term, onChange }) => {
  return (
    <Input
      className='filters__search-input'
      type='search'
      value={term}
      placeholder='Поиск'
      aria-label='Поиск поста'
      onChange={evt => onChange(evt.target.value)}
    />
  )
}

export default Search
