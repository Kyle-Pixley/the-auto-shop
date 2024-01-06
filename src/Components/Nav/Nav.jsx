import React, {useState} from 'react'
import Logo from '../../assets/the-auto-shop-logo.png'
import Home from '../Home/Home.jsx'
import './Nav.css'

function Nav() {

    const [activeComponent, setActiveComponent] = useState('home');

    function buttonClick()  {
        console.log('button clicked')
    }


  return (
    <div>
        <div id='nav-banner-container'>

            <div id='logo-parent'>
                <button id='home-button' className='nav-buttons' onClick={e => setActiveComponent('home')}>
                    <img id='nav-logo' src={Logo}/>
                </button>
            </div>

            <div id='nav-text-container'>
                <button id='about-us-button' className='nav-buttons' onClick={() => setActiveComponent('about-us')}>About Us</button>
                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Repair Services</button>
                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Reviews</button>
                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Contact Us</button>
            </div>
        </div>

        <div>
            {activeComponent === 'home' && <Home />}
        </div>
    </div>
  )
}

export default Nav