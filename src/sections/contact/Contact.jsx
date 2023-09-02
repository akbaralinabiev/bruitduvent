import React from 'react'
import './contact.css'

const Contact = () => {
    const emailAddress = 'example@example.com';
  return (
    
    <div className='contact-wrapper' id='contact'>
      <div className='layer'></div>
        <div className='links-above'>
            <a className="social-media" href="https://www.instagram.com/bruitduven.t/">instagram</a>
            <a className="social-media" href="https://t.me/Stohoven">telegram</a>
            <a className='email' href={`mailto:${emailAddress}`}>duvent.photo@gmail.com</a>
        </div>
        <h4 className='copyright'> &copy; 2024 BRUITDUVENT Portfolio. All rights reserved.</h4>
    </div>
  )
}

export default Contact