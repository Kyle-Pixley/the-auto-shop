import React from 'react';
import './BottomBanner.css';

function BottomBanner() {
  return (
    <div id='bottom-banner-container'>
        <div id='business-hours-parent'>
            <h2 id='business-hours-title'>The Auto Shop</h2>
            <a id='address-link' href='https://www.google.com/maps/place/Burlington,+VT/@44.4924953,-73.3742919,12z/data=!3m1!4b1!4m6!3m5!1s0x4cca7a55b69b55e5:0xc35fe519720e498e!8m2!3d44.4758825!4d-73.212072!16zL20vMGhweXY?entry=ttu'>123 Fake Street <br></br>Burlington, Vermont 05401</a>
            <ul>
                <li className='hours-list-items'>Monday: 7:00 am - 5:00 pm</li>
                <li className='hours-list-items'>Tuesday: 7:00 am - 5:00 pm</li>
                <li className='hours-list-items'>Wednesday: 7:00 am - 5:00 pm</li>
                <li className='hours-list-items'>Thursday: 7:00 am - 5:00 pm</li>
                <li className='hours-list-items'>Friday: 7:00 am - 5:00 pm</li>
            </ul>
        </div>

        <div id='popular-services-parent'>
            <h2 id='popular-services-title'>Popular Services</h2>
            <ul>
                <li className='services-list-items'>Car AC Repair</li>
                <li className='services-list-items'>Steering and Suspension Repairs</li>
                <li className='services-list-items'>Electrical Systems Repairs</li>
                <li className='services-list-items'>Transmission & Engine Services</li>
            </ul>
        </div>
    </div>
  )
}

export default BottomBanner