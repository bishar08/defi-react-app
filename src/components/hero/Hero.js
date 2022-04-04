import React from 'react'
import ImageVid from '../../assets/video.mp4'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={ImageVid} type="video/mp4" />
      </video>

      <div className="hero-text">
        <h1 id="platform">Decentralized</h1>
        <h1>
          <span className="blue">Trading </span>Protocol
        </h1>
        <p>
          Granteed liquidity tradingr millions of usersnd top Ethereum
          applications.
        </p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className="btn btn-outline">FAQs</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Volume secured: $42,104,783,662.47</h2>
      </div>
    </div>
  )
}

export default Hero
