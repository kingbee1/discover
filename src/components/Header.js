import { Close, MenuOutlined } from '@material-ui/icons'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo1.png'
import '../styles/Header.css'

const Header = () => {

  const [open, setOpen] = useState(false)
  const showMenu = () => {
    setOpen (!open)
  }


  return (
    <div className='header'>
        <div className="header-logo">
            <img src={logo} alt="discovery-logo" />
        </div>
        <div className="hamburger-icon">
          <MenuOutlined className='icon' onClick={showMenu} />
        </div>

        <nav>
          <ul className={open ? 'list-items active' : 'list-items'}>

            <div className="close-icon">
              <Close className='icon' onClick={showMenu}/>
            </div>


            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/'>Galaxies</Link> </li>
            <li><Link to='/'>Planets</Link> </li>
            <li><Link to='/'>Metaphysical</Link> </li>
            <li><Link to='/contact'>Contact Us</Link> </li>
            <li><Link to='/'>About</Link> </li>

          </ul>
        </nav>
      
    </div>
  )
}

export default Header
