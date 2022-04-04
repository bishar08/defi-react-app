import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2 id="community">Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/1fedd5dc-8354-409a-a6c1-7e181d2ba1e5"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email communication from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
