import React from 'react';
import '../components/Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


function Footer() {
  return (
    <div><div class="footer">
    <div class="footer-container">
      <div class="footer-menu">
        <div class="footer-menu-item">
          <div class="footer-title">Categories</div>
          <ul class="footer-links">
            <li><a href="#">Foodstuffs</a></li>
            <li><a href="#">Soup & stew ingredients</a></li>
            <li><a href="#">Fruits</a></li>
            <li><a href="#">Meat, Poultry & Seafood</a></li>
            <li><a href="#">Oils & Spices</a></li>
            <li><a href="#">Packaged Food</a></li>
          </ul>
        </div>
        <div class="footer-menu-item">
          <div class="footer-title">Company</div>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Make a List</a></li>
          </ul>
        </div>
        <div class="footer-menu-item">
          <div class="footer-title">Connect with us</div>
          <div class="footer-connect">
            <FiFacebook className='footer-icon' />
            <FiInstagram className='footer-icon' />
            <FiTwitter className='footer-icon' />
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        © 2023 MyDomot All Rights Reserved.
      </div>
    </div>
  </div></div>
  )
}

export default Footer