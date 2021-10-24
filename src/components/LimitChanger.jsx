import React from 'react'
import Select from './UI/Select/Select'

const LimitChanger = ({ limit, onChange }) => {
  const limits = [
    { value: 5, name: '5' },
    { value: 10, name: '10' },
    { value: 15, name: '15' },
    { value: 20, name: '20' }
  ]
  return (
    <>
      <label htmlFor='postsSorting'>Выводить по</label>
      <Select
        id='postsSorting'
        className='filters__sorting'
        name='posts-sorting'
        options={limits}
        value={limit}
        onChange={onChange}
      />
    </>
  )
}

export default LimitChanger
