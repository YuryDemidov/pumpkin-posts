import React from 'react'
import bgVideo from '../videos/bg.mp4'
import bgPoster from '../images/bg-poster.jpg'

const AppBackground = () => {
  return (
    <video className='bg-video' src={bgVideo} poster={bgPoster} autoPlay muted loop>
      Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href={bgVideo}>download it</a>
      and watch it with your favorite video player!
    </video>
  )
}

export default AppBackground
