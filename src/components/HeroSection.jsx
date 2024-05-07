import { useState } from 'react';

import './styles/HeroSection.css';
import GetHeadlineDemo from '../assets/GetHeadline-Demo.png';
import HeadlineInputForm from './HeadlineInputForm';

function HeroSection() {


    return (
        <div className="HeroSection">
            <div className='hero-content'>
                <div className='hero-batch'>Marketing & SEO</div>
                <h1>Unlock Higher CTR and Boost SEO Rankings with GetHeadline </h1>
                <p>Craft compelling headlines effortlessly, and boost  Click-Through Rates (CTR)  and Search Traffic. Start optimizing now for maximum impact!</p>
                <HeadlineInputForm
                    buttonText={'Analyze Now!'}
                    isPreventDefault={false}
                />
            </div>
            <div className='hero-demo'>
                <img src={GetHeadlineDemo} alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
