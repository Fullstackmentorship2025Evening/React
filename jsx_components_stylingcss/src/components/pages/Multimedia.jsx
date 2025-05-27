import React from 'react'
import baadiye from '../public/baadiye.jpg'
import hees from '../public/hees.mp4'
const Multimedia = () => {
  return (
    <div>
      <img src={baadiye} alt="" />
      <video src={hees} controls></video>
      <audio src={hees} controls></audio>
    </div>
  )
}

export default Multimedia