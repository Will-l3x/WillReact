import React from 'react';
import './Styling/flavor.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section id="footer">
  <footer className="footer">
    <div className="footer-left">
      <h3>OUR STORY</h3>
      <p>
        Lorem ipsum dolor sit amet ,
        conscrtur adipcing elt sed ,to
        Lorem ipsum dolor sit amet ,
        conscrtur adipcing elt sed ,to
      </p>
      <div className="socials">
        <a href><i className="fab fa-facebook" /></a>
        <a href><i className="fab fa-twitter" /></a>
        <a href><i className="fab fa-instagram" /></a>
      </div>
    </div>
    <ul className="footer-right">
      <li>
        <h2>MORE</h2>
        <ul className="box">
          <li>
            <a href>About Us</a>
          </li>
          <li>
            <a href>Contact Us</a>
          </li>
          <li>
            <a href>Track My Order</a>
          </li>
          <li>
            <a href>FAQ</a>
          </li>
        </ul>
      </li>
      <li className="features">
        <h2>SHOP</h2>
        <ul className="box">
          <li>
            <a href>Bed Linen</a>
          </li>
          <li>
            <a href>Bath Towels</a>
          </li>
          <li>
            <a href>Bathrobes</a>
          </li>
          <li>
            <a href>Home fragrances</a>
          </li>
        </ul>
      </li>   
      <li>
        <h2>NEWSLETTER</h2>
        <ul className="box">
          <li>
            Subscribe to recive updates , access to exclusive
            deals and more
          </li>
        </ul>
      </li>     
    </ul>
    <div className="footer-bottom-left">
      <p>©2020 BLAUCHE</p>
      <ul>
        <i className="fab fa-cc-visa" />
        <i className="fab fa-cc-paypal" />
        <i className="fab fa-cc-mastercard" />
        <i className="fab fa-cc-apple-pay" />
      </ul>
    </div>
  </footer>
</section>

          
             
  );
}

export default Footer;
