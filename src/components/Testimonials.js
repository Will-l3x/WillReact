import React from 'react'
import './Styling/flavor.css'

function Testimonials() {
    return (
        <section className="testimonials">
        <div className="title white">
          <div className="icons">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" /> 
            <i className="fas fa-star" />
          </div>
          <h2 className="titleText">"This is the best towel set i have ever had . It is so
            cool , comfortable and aesthically perfect </h2>
          <div className="tes-more">
            <a href="#" className="logo">
              READ MORE TESTIMONIALS
            </a>
          </div>
          <div className="fb">
            <a href="#" className="logo" id="fb">
              <p>FOLLOW US ON 
                <i className="fab fa-facebook" /></p>
            </a>
          </div>
        </div>
      </section>
      
    )
}

export default Testimonials
