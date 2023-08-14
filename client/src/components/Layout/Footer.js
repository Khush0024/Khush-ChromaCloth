import React from 'react'
import { Link } from 'react-router-dom';
import About from './../../pages/About.js';
import Contact from './../../pages/Contact.js';
import Policy from './../../pages/Policy.js';

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <h4 className='text-center'>All Rights Reserved &copy; Khushpal Singh.</h4>
            <p className='text-center mt-3'>
                <Link to="/about">About</Link> |
                <Link to="/contact">Contact</Link> |
                <Link to="/policy">Privacy Policy</Link>
            </p>
        </div>
    </div>
  );
};

export default Footer;