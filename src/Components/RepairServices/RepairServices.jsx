import React from 'react';
import './RepairServices.css';
import BottomBanner from '../BottomBanner/BottomBanner.jsx';
import RepairServices2 from './RepairServices2/RepairServices2.jsx';
import MargaretWorkingImage from '../../assets/margaret-engine.webp';
import CheckMark from '../../assets/checkmark.png';

function RepairServices() {
  return (
    <div id='repair-services-container'>
        <div id='intro-background'>
            <div id='intro-background-color'>
                <div id='repair-services-title'>
                    <h1 id='repair-services-title-text'>The Auto Shop Repair Services</h1>
                </div>
                <div id='intro-text-and-image'>
                    <img id='margaret-working-image' src={MargaretWorkingImage} />
                    <div id='intro-text-parent'>
                        <p className='intro-texts'>At The Auto Shop, our technicians are highly skilled and experienced, with numerous certifications to handle the latest automotive technologies. Their years of hands-on experience ensure efficient and accurate diagnostics and repairs across various vehicle makes and models.</p>

                        <p className='intro-texts'>Our technicians treat every vehicle with precision and care, from routine maintenance to complex repairs. They identify potential problems early, saving customers time and money.</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='repair-types-parent'>
            <h1>Our technicians are certified to repair:</h1>
            <div style={{height:'6px',width:'35vw',backgroundColor: 'rgb(240,128,128)',marginTop: '18px'}}></div>

            <div id='repair-types-list'>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>Sedans, coups & convertibles</p>
                </div>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>Sport utility vehicles</p>
                </div>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>Trucks</p>
                </div>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>Hybrids</p>
                </div>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>Trailers</p>
                </div>
                <div className='check-repair-pairs'>
                    <img className='checkmark-image' src={CheckMark}/>
                    <p className='repair-texts'>EV's</p>
                </div>
            </div>
        </div>
        <RepairServices2 />
        <BottomBanner />
    </div>
  )
}

export default RepairServices;