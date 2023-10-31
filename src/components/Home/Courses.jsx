import { useState, useEffect } from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
    const [popularCourses, setPopularCourses] = useState([]);

    useEffect(() => {
        async function fetchPopularCourses() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/courses/popular');
                const data = await response.json();
                console.log(data)
                setPopularCourses(data.results);
            } catch (error) {
                console.error('Error fetching popular courses:', error);
            }
        }

        fetchPopularCourses();
    }, []);

    const sixPopularCourses = popularCourses.slice(0, 6);

    return (
        <div className='small__section bg2'>
            <div className="container">
                <div className="courses__container">
                    <div className="course__head">
                        <h3>Popular Courses for you</h3>
                        <p>Get the best course with best price with world-class tutors</p>
                    </div>
                    <div className="courses">
                        {sixPopularCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses