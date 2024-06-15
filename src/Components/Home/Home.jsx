import React from 'react';
import BottomBanner from '../BottomBanner/BottomBanner.jsx';
import AutoShopLogo from '../../assets/the-auto-shop-logo.png';
import './Home.css';

function Home({ isDesktop }) {
  return (
    <div id='home-parent'>
        <div id='background-color-container'>
          <div id='home-content-parent'>
          {isDesktop ? 
            <img id='auto-logo' src={AutoShopLogo} />
          : null}

            <div id='right-content-parent'>
              <h1 id='auto-shop-title-the'>THE</h1>
              <h1 id='auto-shop-title'>AUTO SHOP</h1>
              <div id='title-underline'></div>
              <h2 id='opening-line'>Welcome to The Auto Shop, where friendly service meets quality work for all your automotive needs!</h2>
              <h2 id='address-line'>123 Fake Street,<br /> Burlington, VT 05401</h2>
            </div>
          </div>
        </div>
      <BottomBanner/>
    </div>
  )
}

export default Home;