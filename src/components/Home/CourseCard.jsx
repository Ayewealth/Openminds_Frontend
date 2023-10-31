
const CourseCard = ({ course }) => {
  return (
    <div className='course__card'>
      <div id='card__img'>
        <img src={course.image} alt={course.title} width={179} />
      </div>
      <div id='card__category'>
        <p>{course.category}</p>
      </div>
      <div id='card__title'>
        <p>{course.title}</p>
        <span>by {course.instructor.name}</span>
      </div>
      <div className="card__bottom">
        <div id='bottom__content'>
          <div>
            <i className="uil uil-user" id="num__stu"></i>
          </div>
          <p>{course.students_purchased_count || 0}</p>
        </div>
        <div id='bottom__content'>
          <div>
            <i className="uil uil-star" id="star"></i>
          </div>
          <p>{course.average_rating || 0}</p>
        </div>
        <div id='bottom__content'>
          <div>
            <i className="uil uil-dollar-sign-alt" id="price"></i>
          </div>
          <p>${course.price || 0}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard