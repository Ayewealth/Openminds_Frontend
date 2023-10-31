import reviewUser from '../../assets/review-user.jpeg'

const Testimony = () => {
  return (
    <div className='review__card'>
      <p>Great platform</p>
      <div className='review__content'>
        <div id='quote'>
          “
        </div>
        <div className='content__inner'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tortor porta, aliquam quam auctor, viverra nulla. Praesent ipsum metus, convallis efficitur mauris at, fermentum posuere magna. Suspendisse rhoncus turpis odio, ac mollis ex fermentum in.
          </p>
          <hr />
          <div id='review__user'>
            <img src={reviewUser} alt="" />
            <div>
              <p>Joe Root</p>
              <div>
                <i className="uil uil-star" id="star"></i>
                <i className="uil uil-star" id="star"></i>
                <i className="uil uil-star" id="star"></i>
                <i className="uil uil-star" id="star"></i>
                <i className="uil uil-star" id="star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony