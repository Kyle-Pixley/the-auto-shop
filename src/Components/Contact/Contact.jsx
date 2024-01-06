import React from 'react'
import PhoneIcon from '../../assets/phone-icon.png'
import EmailIcon from '../../assets/email-icon.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import XIcon from '../../assets/x-icon.png'
import './Contact.css'

function Contact() {

    const emailAddress = 'autoshop@auto.shop'
    //! change this address ^^^^^^^^^

  return (
    <div id='top-banner'>
        <div id='contact-line'>
            <a id='phone-link' href='tel:+12345678910'>
                <img src={PhoneIcon} id='phone-icon'/>
                <p id='phone-number'>1-234-567-8910</p>
            </a>

            <a id='email-link' href={`mailto:${emailAddress}`} >
                <img src={EmailIcon} id='email-icon'/>
                <p id='email'>autoshop@auto.shop</p>
            </a>
            <a href='https://www.facebook.com' target='_blank'>
                <img src={FacebookIcon} id='facebook-icon' />
            </a>
            <a href='https://www.twitter.com' target='_blank'>
                <img src={XIcon} id='x-icon' />
            </a>
        </div>

        <div id='title-name-parent'>
            <p id='title-name'>The Auto Shop</p>
        </div>

    </div>
  )
}

export default Contact