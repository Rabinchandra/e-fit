import React from 'react'
import Navbar from './Navbar'
import videoMp4 from '../images/file.mp4';

function Hero() {
  return (
    <div className="hero">
        <Navbar />
        <div className="overlay"></div>
        <video autoPlay loop muted className='back-video' src={videoMp4}/>
        <div className="hero-text">
            <h1> <span>GET FIT</span> STRONG <br />& Motivated</h1>
            <p>
                Empower yourself to make changes<br /> you need to make
            </p>
            <a href="#" className='btn'>Get Started</a>
        </div>
        <div className="faded"></div>
    </div>
  )
}

export default Hero