import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-container">
    <div className="slide-container-about">
        <div className="card-wrapper-about">

              <div className="card-about">
                <div className="image-content-about">
                  <span className="overlay-about"></span>

                  <div className="card-image-about">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661657647512-5b33e9b945e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2990&q=80"
                      alt=""
                      className="card-img-about"
                    />
                  </div>
                </div>
                <div className="card-content-about">
                  <h2 className="title-about">About Us</h2>
                  <p className="description-about">
                  Providing you with indutry standard Telecommunications services. We are here to install you home video secuity system.
                  </p>

                  {/* <button className="button">View More</button> */}
                </div>
              </div>
        </div>
    </div>
  </div>
  )
}

export default About