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

        <h1 id='customer-reviews-title'>More Customer Reviews . . .</h1>

        <div id='reviews-parent'>

            <div id='review-parent-one'>
                <div className='review-parents'>
                    <p className='review-texts'>
                        "Absolutely fascinating experience at this auto shop! The mechanics are brilliant, and they got my car flying perfectly in no time. No tricks, just honest, excellent service. Highly recommend to all Muggles needing car repairs!"
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Arthur Weasley</p>
                        <p>1960 Ford Anglia 105E</p>
                    </div>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "I was a little tired, little wired, and I think I deserve a little appreciation and these guys gave me that. They took my car in, and had it purring like a kitten in no time."
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Memphis Raines</p>
                        <p>Shelby GT500 "Eleanor"</p>
                    </div>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                        "Efficient and professional, this auto shop is top-notch. The mechanics quickly diagnosed and fixed my car, which other shops couldn't. They provided a fair estimate without upselling unnecessary repairs. My car's performance has significantly improved and is running smoother than ever. The facility is clean and organized, reflecting their professionalism. I highly recommend this place for reliable and trustworthy service."
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Deckard Shaw</p>
                        <p>1992 Mercedes S-Klasse</p>
                    </div>
                </div>
            </div>
            <div id='review-parent-two'>
                <div className='review-parents'>
                    <p className='review-texts'>
                        "Yabba Dabba Doo! This auto shop rocks! The mechanics here are as reliable as my Flintmobile. They got my car fixed up faster than you can say 'Wilma!' Honest work, fair prices, and a friendly crew. They really know how to treat a caveman right. If you want your ride to run smoother than a brontosaurus slide, head on over to this shop. It's a real Bedrock gem!"
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Fred Flinstone</p>
                        <p>10,000 BC Flintmobile</p>
                    </div>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "Ka-chow! This auto shop is faster than fast and quicker than quick! They tuned me up in record time, and now I'm running smoother than ever. The mechanics here really know their stuff and treat you like a champion. From the moment I rolled in, I knew I was in good hands. Honest, top-quality service. If you want your car to feel like it's racing on the Piston Cup circuit, this is the place to go!"
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Lightning McQueen</p>
                        <p>Chevrolet Corvette C6.R</p>
                    </div>
                </div>
                <div className='review-parents'>
                    <p className='review-texts'>
                    "Solid crew and excellent service. They got my vehicle back in shape quickly and did a thorough job. These guys don't mess around."
                    </p>
                    <div className='review-text-author-parents'>
                        <p>-Luke Hobbs</p>
                        <p>Gurkha LAPV</p>
                    </div>
                </div>
            </div>

        </div>
        <BottomBanner />
    </div>
  )
}

export default Reviews;