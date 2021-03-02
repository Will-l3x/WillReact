import React from 'react'
import { Button } from './Button';
import './Styling/flavor.css';
import image from '../images/landing.PNG'

function Section() {
    
    return (
        <section className="banner" id="banner" >
            <div className="content">
                <h2>Super Soft, Stylish Bed Linen</h2>
                <h2>Made with Love</h2>
                <a href="#menu" className="btn"> Explore</a>
            </div>
        </section>

    )
}

export default Section
