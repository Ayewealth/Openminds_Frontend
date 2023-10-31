import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div className='bg'>
            <div className='news__bg'>
                <div className="container">
                    <div className="join__container">
                        <p>Join us and start learning today!</p>
                        <button>
                            <Link to='/choice'>
                                Join Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join