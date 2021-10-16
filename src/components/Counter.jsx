import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment} type='button'>+</button>
      <button onClick={decrement} type='button'>-</button>
    </div>
  )
}

export default Counter;
