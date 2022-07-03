import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Section.css'
import Modal from '../variables/Modal'
import Nature from '../variables/Nature'
import Planet from '../variables/Planet'
import Space from '../variables/Space'

const Section = () => {

  const [text,setText] = useState('first-btn')

  const [isModalActive, setModalActive] = useState (false)

  const isActive = () => {
    setModalActive(!isModalActive)
  }

  return (
    <div className='section'>
      <div>
        <div className="change-box">
          <button className='state-change-btn' onClick={() => setText('first-btn')}>Nature</button>
          <button className='state-change-btn' onClick={() => setText('second-btn')}>Planets</button>
          <button className='state-change-btn' onClick={() => setText('third-btn')}>Space</button>
        </div>

        <div>
          {text === 'first-btn' && <Nature/>}
          {text === 'second-btn' && <Planet/>}
          {text === 'third-btn' && <Space/>}

          <div className="button">
            <Link to='/' onClick={isActive} className='section-button'>Search</Link>
          </div>

          {isModalActive && <Modal dog={isActive} />}

        </div>
      </div>

    </div>
  )
}

export default Section
