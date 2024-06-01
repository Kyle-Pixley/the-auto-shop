import React, {useState} from 'react'
import Logo from '../../assets/the-auto-shop-logo.png'
import Home from '../Home/Home.jsx'
import './Nav.css'
import AboutUs from '../AboutUs/AboutUs.jsx'

function Nav() {

    const [ activeComponent, setActiveComponent ] = useState('home');
    const [ activeButton, setActiveButton ] = useState('home');

    function buttonClick()  {
        console.log('button clicked')
    }

    function changeActiveComponent(component) {
        setActiveComponent(component)
        setActiveButton(component)
    }


  return (
    <div>
        <div id='nav-banner-container'>

            <div id='logo-parent'>
                <button id='home-button' className='nav-buttons' onClick={() => changeActiveComponent('home')}>
                    <img id='nav-logo' src={Logo}/>
                </button>
            </div>

            <div id='nav-text-container'>
                <button id='about-us-button' className='nav-buttons' onClick={() => changeActiveComponent('about-us')}
                style={{color: activeButton === 'about-us' ? 'rgb(240,128,128)' : 'black'}}
                >About Us</button>

                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Repair Services</button>

                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Reviews</button>

                <button id='repair-services-button' className='nav-buttons' onClick={buttonClick}>Contact Us</button>
            </div>
        </div>

        <div>
            {activeComponent === 'home' && <Home />}
            {activeComponent === 'about-us' && <AboutUs />}
        </div>
    </div>
  )
}

export default Nav