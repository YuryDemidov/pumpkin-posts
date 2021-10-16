import React from 'react'

import './styles/App.css'

function App() {
  return (
    <div className='App'>
      <div className='post'>
        <div className='post__content'>
          <h2>1. Javascript</h2>
          <p>Javascript - язык программирования</p>
        </div>
      </div>
      <div className='post__buttons'>
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default App
