import React, { useState } from 'react'
import { Close } from '@material-ui/icons'
import '../styles/Modal.css'

const Modal = ({dog}) => {

   

  return (
    <div className='modal'>

        <div className="close-modal">
            <Close className='icon' onClick={dog}/>
        </div>

        <div className="modal-input">
            <input type='text' placeholder='Search' />
            <button>next</button>
        </div>
      
    </div>
  )
}

export default Modal
