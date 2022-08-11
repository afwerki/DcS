import React from 'react'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div aboutUs>
        <h1>Grid Elements</h1>

<p>A Grid Layout must have a parent element with the <em>display</em> property set to <em>grid</em> or <em>inline-grid</em>.</p>

<p>Direct child element(s) of the grid container automatically becomes grid items.</p>

<div className="AboutUs_container">
  <div className="grid-item">
  <h4>This is me
  </h4>
  </div>
  <div className="grid-item">Jae</div>
  <div className="grid-item">sukin</div>  
  <div className="grid-item">bavan</div>
  <div className="grid-item">others</div>
  <div className="grid-item">others</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  
</div>


    </div>
  )
}

export default AboutUs