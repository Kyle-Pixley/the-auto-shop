import React from 'react';
import ACImage from '../../../assets/ac-image.webp';
import ChangingOil from '../../../assets/changing-oil.jpg';
import ChangingTire from '../../../assets/changing-tire.jpg';
import TowTruck from '../../../assets/tow-truck.webp';
import SteeringImage from '../../../assets/steering-image.jpg';
import ObdScanner from '../../../assets/obd-scanner.webp';
import BrakeService from '../../../assets/brake-service.png';
import Drivetrain from '../../../assets/drivetrain.webp';
//todo replace these images ^^^
import ElectricalWork from '../../../assets/electrical-work.jpg';
import FuelGauge from '../../../assets/fuel-gauge.jpg';
import AutoExhaust from '../../../assets/auto-exhaust.jpg';
import CrackedWindshield from '../../../assets/cracked-windshield.avif';
import './RepairServices2.css';

function RepairServices2() {
  return (
    <div id='repair-services-2-container'>
      <h1>The Auto Shop services include...</h1>
      <div style={{height:'6px',width:'30vw',backgroundColor: 'rgb(240,128,128)',marginTop: '25px', marginBottom: '30px'}}></div>

      <div id='repair-types-container'>
        <div className='repair-types-parents'>
          <img className='repair-images' src={ACImage} /> 
          <h1 className='repair-titles'>A/C Heating & Cooling</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={ChangingOil} /> 
          <h1 className='repair-titles'>Preventative Maintenance</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={ChangingTire} /> 
          <h1 className='repair-titles'>Tire & Wheel Service</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={TowTruck}/> 
          <h1 className='repair-titles'>24-Hour Towing Service</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={SteeringImage} /> 
          <h1 className='repair-titles'>Steering & Suspension</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={ObdScanner} /> 
          <h1 className='repair-titles'>Vehicle Analysis</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={BrakeService} /> 
          <h1 className='repair-titles'>Brake Systems</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={Drivetrain} /> 
          <h1 className='repair-titles'>Vehicle Drivetrain</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={ElectricalWork} /> 
          <h1 className='repair-titles'>Electrical Systems</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={FuelGauge} /> 
          <h1 className='repair-titles'>Fuel & Emissions Systems</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={AutoExhaust} /> 
          <h1 className='repair-titles'>Exhaust Systems</h1>
          <p className='repair-texts'></p>
        </div>
        <div className='repair-types-parents'>
          <img className='repair-images' src={CrackedWindshield} /> 
          <h1 className='repair-titles'>Auto Glass Repair</h1>
          <p className='repair-texts'></p>
        </div>
      </div>
    </div>
  )
}

export default RepairServices2;