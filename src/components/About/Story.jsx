import React from 'react'

import StoryImg from '../../assets/story img.jpeg'

const Story = () => {
    return (
        <div className='small__section bg'>
            <div className="container story__container">
                <div className="story__title">
                    <h3>Our Story</h3>
                    <p>
                        OpeanMinds was founded by Daphne Koller and Andrew Ng in 2023 with a vision of providing life-transforming learning experiences to learners around the world. Today, Coursera is a global platform for online learning and career development that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Coursera received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.
                    </p>
                </div>
                <div className="story__img">
                    <img src={StoryImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Story