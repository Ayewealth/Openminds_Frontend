import React from 'react'
import ExtraCard from './ExtraCard'

const Extra = () => {
    return (
        <div className='small__section bg'>
            <div className="container">
                <div className="extra__container">
                    <ExtraCard
                        className="teach"
                        h3="Work With Us"
                        content="At OpenMinds, we’re all learners and instructors. If you have a course you want to sell on this platform. You can become an instructor right now"
                        linkto="/instructor"
                        linktxt="Join now"
                    />
                    <ExtraCard
                        className="vision"
                        h3="Our Vision"
                        content="We envision a world where anyone, anywhere has the power to transform their lives through learning."
                        linkto=""
                        linktxt="Learn more"
                    />
                    <ExtraCard
                        className="blog"
                        h3="Our Blog"
                        content="Want to know what we have been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more."
                        linkto="/blog"
                        linktxt="Read now"
                    />
                </div>
            </div>
        </div>
    )
}

export default Extra