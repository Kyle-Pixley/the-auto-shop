import React, {useState} from 'react';
import Logo from '../../assets/the-auto-shop-logo.png';
import Home from '../Home/Home.jsx';
import './Nav.css';
import AboutUs from '../AboutUs/AboutUs.jsx';
import RepairServices from '../RepairServices/RepairServices.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';

function Nav({ isDesktop }) {

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

                <button id='repair-services-button' className='nav-buttons' onClick={() => changeActiveComponent('repair-services')}
                style={{color: activeButton === 'repair-services' ? 'rgb(240,128,128)' : 'black'}}>Repair Services</button>
            
                <button id='repair-services-button' className='nav-buttons' onClick={() => changeActiveComponent('reviews')}
                style={{color: activeButton === 'reviews' ? 'rgb(240,128,128)' : 'black'}}>Reviews</button>
            
                
                <button id='repair-services-button' className='nav-buttons' onClick={() => changeActiveComponent('contact-us')}
                style={{color: activeButton === 'contact-us' ? 'rgb(240,128,128)' : 'black'}}>Contact Us</button>
            </div>
        </div>

        <div id='active-component-container'>
            {activeComponent === 'home' && <Home isDesktop={isDesktop}/>}
            {activeComponent === 'about-us' && <AboutUs isDesktop={isDesktop}/>}
            {activeComponent === 'repair-services' && <RepairServices 
            isDesktop={isDesktop} />}
            {activeComponent === 'reviews' && <Reviews />}
            {activeComponent === 'contact-us' && <ContactUs />}
        </div>
    </div>
  )
}

export default Nav