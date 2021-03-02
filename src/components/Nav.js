import React from 'react'
import './Styling/flavor.css'

function Nav() {
    return (
        <header>
        <ul className="navigation left">
            <li> <a href="#">SHOP</a> </li>
            <li> <a href="#">
                OUR STORY
            </a> </li>
            <li> <a href="#">
                EXPERTISE
            </a> </li>
        </ul>
        <a href="#" className="logo">
            BLANCHE
        </a>
        <ul className="navigation right">
            <li> <a href="#">CONTACT</a> </li>
            <li> <a href="#">
                <i className="fas fa-search" />
            </a> </li>
            <li> <a href="#">
                <i className="far fa-user" />
            </a> </li>
            <li> <a href="#">
                <i className="fas fa-shopping-cart" />
            </a> </li>
        </ul>
</header>

    )
}

export default Nav
