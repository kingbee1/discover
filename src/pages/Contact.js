import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>

        <h1>Contact Us</h1>

        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Message' className='input-message'/>
        <Link to='/'>Send</Link>
      
    </div>
  )
}

export default Contact
