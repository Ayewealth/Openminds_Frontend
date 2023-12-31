import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='small__section bg'>
            <div className="container">
                <div className="category__container">
                    <div className="category__head">
                        <div id='head__txts'>
                            <h3>Explore Courses by Categories</h3>
                            <p>Browse top class courses by browsing our category which will be more easy for you.</p>
                        </div>
                        <div id='head__btn'>
                            <button>All Category</button>
                        </div>
                    </div>
                    <div className="categories">
                        <Link to=''>
                            <div id='category'>
                                <div id='des__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" viewBox="0 0 52 52" fill="none">
                                        <path d="M49.0816 46.0872C50.691 46.0872 52 47.4132 52 49.0436C52 50.6771 50.691 52 49.0816 52H32.5858C30.9763 52 29.6673 50.6771 29.6673 49.0436C29.6673 47.4132 30.9763 46.0872 32.5858 46.0872H49.0816ZM37.6418 2.01952L41.9029 5.40449C43.6503 6.7709 44.8152 8.57207 45.2138 10.4664C45.6736 12.5502 45.1831 14.5967 43.8036 16.3668L18.4207 49.1917C17.2558 50.6823 15.5391 51.5208 13.6997 51.5519L3.58336 51.6761C3.03156 51.6761 2.57173 51.3034 2.4491 50.7755L0.149929 40.8069C-0.248595 38.9747 0.149929 37.0804 1.31484 35.6208L19.3097 12.3297C19.6163 11.957 20.1681 11.898 20.5359 12.1744L28.1079 18.1991C28.5984 18.6028 29.2728 18.8202 29.9779 18.727C31.48 18.5407 32.4917 17.1742 32.3384 15.7147C32.2464 14.9694 31.8785 14.3483 31.3881 13.8824C31.2348 13.7582 24.0307 7.98203 24.0307 7.98203C23.5709 7.60938 23.4789 6.92617 23.8468 6.46346L26.6977 2.76483C29.3341 -0.620138 33.9325 -0.930686 37.6418 2.01952Z" fill="#93C9EC" />
                                    </svg>
                                </div>
                                <div id='cat__txts'>
                                    <p>Design</p>
                                    <span>250+ courses avaliable</span>
                                </div>
                            </div>
                        </Link>
                        <Link to=''>
                            <div id='category'>
                                <div id='dev__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M14.2079 27.527C17.5918 27.527 20.3038 30.2654 20.3038 33.6734V41.8549C20.3038 45.2389 17.5918 47.9988 14.2079 47.9988H6.09594C2.73598 47.9988 0 45.2389 0 41.8549V33.6734C0 30.2654 2.73598 27.527 6.09594 27.527H14.2079ZM41.9039 27.527C45.2638 27.527 47.9998 30.2654 47.9998 33.6734V41.8549C47.9998 45.2389 45.2638 47.9988 41.9039 47.9988H33.7919C30.408 47.9988 27.696 45.2389 27.696 41.8549V33.6734C27.696 30.2654 30.408 27.527 33.7919 27.527H41.9039ZM14.2079 0C17.5918 0 20.3038 2.75998 20.3038 6.14634V14.3279C20.3038 17.7358 17.5918 20.4718 14.2079 20.4718H6.09594C2.73598 20.4718 0 17.7358 0 14.3279V6.14634C0 2.75998 2.73598 0 6.09594 0H14.2079ZM41.9039 0C45.2638 0 47.9998 2.75998 47.9998 6.14634V14.3279C47.9998 17.7358 45.2638 20.4718 41.9039 20.4718H33.7919C30.408 20.4718 27.696 17.7358 27.696 14.3279V6.14634C27.696 2.75998 30.408 0 33.7919 0H41.9039Z" fill="white" />
                                    </svg>
                                </div>
                                <div id='cat__txts'>
                                    <p>Development</p>
                                    <span>300+ courses avaliable</span>
                                </div>
                            </div>
                        </Link>
                        <Link to=''>
                            <div id='category'>
                                <div id='med__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="47" viewBox="0 0 63 47" fill="none">
                                        <path d="M31.036 0C38.625 0 43.9235 5.22964 43.9235 12.7242V34.2758C43.9235 41.7704 38.625 47 31.036 47H12.8875C5.29852 47 0 41.7704 0 34.2758V12.7242C0 5.22964 5.29852 0 12.8875 0H31.036ZM56.2683 7.45415C57.6439 6.75432 59.2576 6.82749 60.5704 7.65456C61.8833 8.47845 62.6667 9.90992 62.6667 11.475V35.5269C62.6667 37.0952 61.8833 38.5235 60.5704 39.3474C59.8529 39.7959 59.0508 40.0249 58.2424 40.0249C57.5687 40.0249 56.895 39.8659 56.2652 39.5446L51.6247 37.2033C49.9076 36.3317 48.8423 34.5821 48.8423 32.6385V14.3602C48.8423 12.4134 49.9076 10.6638 51.6247 9.79859L56.2683 7.45415Z" fill="#FBC199" />
                                    </svg>
                                </div>
                                <div id='cat__txts'>
                                    <p>Media</p>
                                    <span>100+ courses avaliable</span>
                                </div>
                            </div>
                        </Link>
                        <Link to=''>
                            <div id='category'>
                                <div id='mar__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="62" viewBox="0 0 62 62" fill="none">
                                        <path d="M45.4739 0C56.017 0 61.969 5.9799 62 16.523V45.477C62 56.017 56.017 62 45.4739 62H16.523C5.9799 62 0 56.017 0 45.477V16.523C0 5.9799 5.9799 0 16.523 0H45.4739ZM32.55 12.803C31.6789 12.276 30.6249 12.276 29.791 12.803C28.9509 13.3269 28.489 14.291 28.5789 15.252V46.841C28.737 48.174 29.8499 49.166 31.1519 49.166C32.488 49.166 33.6009 48.174 33.7249 46.841V15.252C33.8489 14.291 33.387 13.3269 32.55 12.803ZM18.073 22.971C17.236 22.444 16.1789 22.444 15.345 22.971C14.5049 23.498 14.043 24.4559 14.136 25.42V46.841C14.2569 48.174 15.3729 49.166 16.7059 49.166C18.042 49.166 19.1549 48.174 19.2789 46.841V25.42C19.375 24.4559 18.9069 23.498 18.073 22.971ZM46.7759 34.224C45.942 33.697 44.888 33.697 44.02 34.224C43.1799 34.751 42.718 35.6779 42.842 36.673V46.841C42.966 48.174 44.0789 49.166 45.415 49.166C46.717 49.166 47.8299 48.174 47.988 46.841V36.673C48.0779 35.6779 47.616 34.751 46.7759 34.224Z" fill="#CE85D6" />
                                    </svg>
                                </div>
                                <div id='cat__txts'>
                                    <p>Marketing</p>
                                    <span>50+ courses avaliable</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories