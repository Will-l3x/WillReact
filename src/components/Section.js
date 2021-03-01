import React from 'react'
import { Button } from './Button';
import './Styling/Section.css';
import image from '../images/landing.PNG'

function Section() {
    
    return (
        <div className="section-container">
            <img src = {image}/>
            <div className="section-btns">
                <Button className="btns" buttonStyle='btn--outline' 
                    buttonSize='btn--large'></Button>
            </div>
        </div>
    )
}

export default Section
