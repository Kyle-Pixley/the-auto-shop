import React from 'react';
import ReviewCycler from './ReviewCycler/ReviewCycler';
import BottomBanner from '../BottomBanner/BottomBanner';
import CustomerImage from '../../assets/mechanic-customer.webp';
import './Reviews.css';

function Reviews() {

  return (
    <div id='reviews-container'>
        <div id='review-banner'>
            <h1>The Auto Shop Customer Reviews</h1>
        </div>

        <div id='image-rotating-review-parent'>
            <img id='customer-image' src={CustomerImage} /> 
            <div id='rotating-reviews'>
                <ReviewCycler />
            </div>
        </div>

        <h1 id='customer-reviews-title'>More Customer Reviews</h1>

        <div id='reviews-parent'>

            <div id='review-parent-one'>
                <div className='review-parents'>
                    <p className='review-texts'>
                        I had a fantastic experience at this auto shop. The staff was very courteous and explained everything clearly. Highly recommended!
                    </p>
                    <p>-Frank Grimes</p>
                    <p>Ford Taurus</p>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "I am so grateful to have found this auto shop. The team was so understanding of my situation and worked quickly to get my car back on the road. Their honesty and dedication to customer satisfaction are truly commendable. I can't thank them enough for their help."
                    </p>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "I've been a loyal customer for over a decade, and there's a reason for that. The quality of service here is unmatched. Every time I bring my car in, I know it's in good hands. The staff knows me by name, and they always go the extra mile to ensure I'm satisfied. From minor repairs to major overhauls, they've handled it all with expertise and care. Highly recommend this place to anyone looking for a trustworthy auto shop."
                    </p>
                </div>
            </div>
            <div id='review-parent-two'>
                <div className='review-parents'>
                    <p className='review-texts'>
                        "This is my go-to place for all my car repairs. The mechanics are honest and always provide an accurate estimate. They don't try to upsell unnecessary services, which I really appreciate. The waiting area is also clean and comfortable."
                    </p>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "I've been coming to this auto shop for over five years, and I've always been satisfied with their work. The staff is incredibly professional and always takes the time to explain the issues and the necessary repairs. The prices are reasonable, and they often offer discounts or promotions. Whether it's routine oil change or a major repair, I trust them completely with my vehicle."
                    </p>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "Quick, efficient, and affordable service. Couldn't ask for more."
                    </p>
                </div>
            </div>

        </div>
        <BottomBanner />
    </div>
  )
}

export default Reviews;