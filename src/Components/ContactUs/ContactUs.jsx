import React from 'react';
import PhoneIcon from '../../assets/phone-icon.png';
import MailIcon from '../../assets/email-icon.png';
import FaceBookIcon from '../../assets/facebook-icon.png';
import XIcon from '../../assets/x-icon.png';
import BottomBanner from '../BottomBanner/BottomBanner';
import './ContactUs.css';

function ContactUs() {
  return (
    <div id='contact-us-container'>
        <div id='contact-us-banner-parent'>
            <div id='contact-us-banner-color-parent'>
                <h1 id='contact-banner-title'>Contact The Auto Shop</h1>
                <p id='contact-banner-text'>We offer 24-hour towing to out shop any day of the year for when your car can't quite make it.</p>
            </div>
        </div>

        <div id='contact-info-form-parent'>
            <div id='contact-info-parent'>
                <h1 style={{color: 'black'}}>Contact Information</h1>
                <div id='contact-info-icons-text'>
                    <div className='contact-parents'>
                    <a href='tel:15555678910' className='phone-email-links'>
                        <img src={PhoneIcon} className='phone-images' />
                        <p className='contact-texts'>Shop: 1(555)567-8910</p>
                    </a>
                    </div>
                    <div className='contact-parents'>
                    <a href='tel:15555678910' className='phone-email-links'>
                        <img src={PhoneIcon} className='phone-images' />
                        <p className='contact-texts'>Towing: 1(555)567-8910</p>
                    </a>
                    </div>
                    <div className='contact-parents'>
                    <a href='mailto:autoshop@auto.shop' className='phone-email-links'>
                        <img src={MailIcon} className='mail-images' />
                        <p className='contact-texts'>Email: autoshop@auto.shop</p>
                    </a>
                    </div>
                    <div className='socials-parents'>
                        <a id='facebook-link'
                            href='https://www.facebook.com/'
                            target='_blank'
                            >
                            <img 
                            id='facebook-icon-c'
                            src={FaceBookIcon} />
                                FaceBook.com/AutoShop</a>
                    </div>
                    <div className='socials-parents'>
                        <a id='x-link'
                            href='https://www.twitter.com/'
                            target='_blank'
                            >
                            <img
                            id='x-icon-c'
                            src={XIcon} />
                                X.com/AutoShop</a>
                    </div>
                </div>
            </div>
            <div id='contact-paragraph-parent'>
                <p>We're dedicated to providing top-quality service and customer care. Whether you have a question about your vehicle, need routine maintenance, or require more extensive repairs, our knowledgeable team is here to help. Feel free to reach out to us for any automotive needs or inquiries. We're always ready to assist you and ensure your vehicle is running smoothly and safely. Contact us today and experience the difference in our service.</p>
            </div>
        </div>
        <BottomBanner />
    </div>
  )
}

export default ContactUs