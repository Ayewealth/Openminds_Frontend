import React from 'react'

import './about.css'
import HeadImg from '../../assets/about head img.jpeg'

const AboutBanner = () => {
    return (
        <div className='section bg2'>
            <div className="container about__banner">
                <div className='about__title'>
                    <p id='head__title'>ABOUT US</p>
                    <h3>Looking to learn and get hired by your dream company?</h3>
                    <p id='head__p'>
                        What is on many of us mind is to get that dream job, with Operminds that possible. In this platform we have several course that you can learn and land that dream job you have always wanted
                    </p>
                </div>
                <div className='about__img'>
                    <img src={HeadImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutBanner