import React from 'react';
import BottomBanner from '../BottomBanner/BottomBanner';
import './AboutUs.css';
import FatherDaughterMechanics from '../../assets/father-daughter-mechanics.webp';

function AboutUs() {
  return (
    <div id='about-us-container'>
        <div id='about-us-banner'>
            <h1 id='banner-title'>About The Auto Shop</h1>
            <h2 id='banner-text'>Friendly auto repair in Burlington, Vermont since 1990</h2>
        </div>
        <div id='history-parent'>
            <div id='history-text-parent'>
                <h1 id='our-history-title'>Our History</h1>
                <p id='our-history-text'>
                    The Auto Shop was founded in 1990 by Frank Grimes, a seasoned mechanic with a passion for automobiles and a dream to create a one-stop destination for car enthusiasts and everyday drivers alike. Located in the heart of Burlington, Vermont, The Auto Shop quickly established itself as a reliable and customer-centric business. Frank's commitment to quality service and fair pricing resonated with the local community, transforming a small garage into a bustling auto repair and maintenance hub. The shop’s reputation grew through word-of-mouth, as satisfied customers recommended The Auto Shop to friends and family, cementing its place as a trusted fixture in Burlington.
                </p>
                <p id='our-history-text-2'>
                    By the early 2000s, The Auto Shop had integrated advanced diagnostic equipment and training programs to ensure its technicians were equipped to handle the latest automotive technologies. Despite its growth, The Auto Shop maintained its core values of honesty, integrity, and exceptional customer service. Today, The Auto Shop remains a family-owned business, with Frank’s daughter, Margaret Grimes, at the helm. Under her leadership, the shop continues to thrive, blending traditional mechanical expertise with modern innovations, all while keeping the community spirit alive in Burlington.
                </p>
            </div>
            <div id='image-border'>
                <img id='father-daughter-mechanics-image' src={FatherDaughterMechanics}/>
            </div>
        </div>
        <div id='philosophy-parent'>
            <h1 id='philosophy-title'>Our Philosophy</h1>
            <p id='philosophy-text'>
            At The Auto Shop, Frank Grimes and his daughter, Margaret Grimes, have built a business grounded in a simple yet profound philosophy: integrity, expertise, and community. Frank, with over three decades of experience, believes that honesty is the cornerstone of any successful business. This principle is reflected in every service they provide, ensuring that customers receive transparent, fair assessments and solutions tailored to their specific needs. Margaret, bringing fresh perspectives and innovative approaches, complements her father’s seasoned wisdom, creating a harmonious blend of traditional and modern automotive practices.
            </p>
            <p id='philosophy-text-2'>
            The Auto Shop is more than just a place to get your car fixed; it’s a community hub where customers are treated like family. Frank and Margaret are committed to fostering a welcoming environment where everyone feels valued and respected. Their dedication to continuous learning and staying ahead of industry advancements ensures that they offer the best possible service. By prioritizing customer education and engagement, The Auto Shop empowers car owners with the knowledge to make informed decisions about their vehicles, reinforcing their philosophy of trust and excellence.
            </p>
        </div>
        <BottomBanner />
    </div>
  )
}

export default AboutUs;