import React, { useContext, useEffect, useState } from 'react'

import Navbar from '../components/Nav/Navbar'
import Banner from '../components/Home/Banner'
import Rage from '../components/Home/Rage'
import Footer from '../components/Footer/Footer'
import AuthContext from '../context/AuthContext'
import Categories from '../components/Home/Categories'
import Courses from '../components/Home/Courses'
import Testimonial from '../components/Home/Testimonial'
import Blog from '../components/Home/Blog'


const Home = () => {
  const { loginMsg } = useContext(AuthContext)
  const [isVisble, setIsVisible] = useState(true)

  useEffect(() => {
    if (loginMsg) {
      const timout = setTimeout(() => {
        setIsVisible(false)
      }, 2000)

      return () => {
        clearTimeout(timout);
      };
    }
  }, [loginMsg])
  return (
    <>
      <Navbar />
      {isVisble && <p>{loginMsg}</p>}
      <Banner />
      <Rage />
      <Categories />
      <Courses />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default Home