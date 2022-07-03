import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Details.css'

const Details = () => {
  return (
    <div className='details'>

        <div className="details-text">

            <h1 className='details-header'>All you need to know about <span>Teleporting</span></h1>

            <p>Lorem ipsum, dolor sit amet.  </p>
            <p>Nobis exercitationem quas.</p>
            <p>repudiandae aliquid eaque ab ex. </p>
            <p>Sit dolorum sed porro.</p>
            <p>Follow me everywhere bra</p>
            <p>Like and subscribe here</p>

            <div className="done-btn">
                <Link to='/'>Done</Link>
            </div>

        </div>

      
    </div>
  )
}

export default Details
