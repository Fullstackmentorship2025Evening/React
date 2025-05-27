import React from 'react'
import '../style/header.css'
const Header = () => {
  return (
    <div>
      <div className="container">
            <div className="logo">
                  <h1>Somcoder</h1>
            </div>
            <div className="navigation">
                  <div className="home">Home</div>
                  <div className="home">About</div>
                  <div className="home">Projects</div>
                  <div className="home">Contact us</div>
            </div>
            <div className="flex">
                  <div className="auth">
                        <div className="sign">Sign</div>
                        <div className="sign">Signup</div>
                        <div className="sign">☀️/🌜</div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Header