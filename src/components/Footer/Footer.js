import { useState } from 'react';
import './style.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="footer" id="footer">
      <div className='contact'>
        <div className='contact-item'>
          <h1>Do You Have Questions?</h1>
          <p>We'll help you to grow your career and growth.</p>
        </div>
        <div className='contact-item'>
          <button type='button'>Contact Us Today</button>
        </div>
      </div>
      <div className="content">
        <div className="content-item first">
          <h1 className='content-title logo'>Logo</h1>
          <h2 className='content-title'>Do You Need Help With Anything?</h2>
          <p className='content-text'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
          <div className='content-form'>
            <form onSubmit={e => e.preventDefault()}>
              <input className='content-input' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' />
              <button className='content-btn'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="content-item">
          <h2 className='content-title'>LAYOUTS</h2>
          <ul>
            <li>
              <a className='content-link'>Home Page</a>
            </li>
            <li>
              <a className='content-link'>About Page</a>
            </li>
            <li>
              <a className='content-link'>Service Page</a>
            </li>
            <li>
              <a className='content-link'>Property Page</a>
            </li>
            <li>
              <a className='content-link'>Contact Page</a>
            </li>
            <li>
              <a className='content-link'>Single Blog</a>
            </li>
          </ul>
        </div>
        <div className="content-item">
          <h2 className='content-title'>ALL SECTIONS</h2>
          <ul>
            <li>
              <a className='content-link'>Headers</a>
            </li>
            <li>
              <a className='content-link'>Features</a>
            </li>
            <li>
              <a className='content-link'>Attractive</a>
            </li>
            <li>
              <a className='content-link'>Testimonials</a>
            </li>
            <li>
              <a className='content-link'>Videos</a>
            </li>
            <li>
              <a className='content-link'>Footers</a>
            </li>
          </ul>
        </div>
        <div className="content-item">
          <h2 className='content-title'>COMPANY</h2>
          <ul>
            <li>
              <a className='content-link'>About</a>
            </li>
            <li>
              <a className='content-link'>Blog</a>
            </li>
            <li>
              <a className='content-link'>Pricing</a>
            </li>
            <li>
              <a className='content-link'>Affiliate</a>
            </li>
            <li>
              <a className='content-link'>Login</a>
            </li>
            <li>
              <a className='content-link'>Changelog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footnote">
        &copy; 2022. Designd By DODO.
      </div>
    </footer>
  )
}

export default Footer;
