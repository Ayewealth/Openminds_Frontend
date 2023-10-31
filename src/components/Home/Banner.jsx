import React from 'react'

import "./home.css"
import headImg from '../../assets/Student-img.png'

const Banner = () => {
    return (
        <div className='section bg'>
            <div className="container banner">
                <div className='banner__title'>
                    <h3>
                        Getting <span>Quality</span> Education Is Now More <span>Easy</span>
                    </h3>
                    <p>
                        Provide you with the lastest online learning system and materials that help your knowledge grow
                    </p>
                    <div>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className='banner__img'>
                    <img src={headImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner