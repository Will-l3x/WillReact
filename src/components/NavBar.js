import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Styling/Navbar.css'

function NavBar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton(); 
    }, []);
    window.addEventListener('resize', showButton);
    return (
       <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Shop
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Our Story
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Expertise
                            </Link>
                        </li>
                    </ul>
                    <Link to ='/' className="navbar-logo" onClick={closeMobileMenu}>
                        BLANCHE 
                    </Link>
                    <div class='menu-icon' onClick={handleClick}>
                        <i class={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div> 
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-search"></i>
                               
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <i class="far fa-user"></i>
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                    </ul>
                    {button  && <Button buttonStyle='btn--outline'></Button>}


                </div>
            </nav> 
       </>
    )
}

export default NavBar
