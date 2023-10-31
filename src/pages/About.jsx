import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer/Footer'
import AboutBanner from '../components/About/AboutBanner'
import DailyNews from '../components/About/DailyNews'
import AboutTestimonail from '../components/About/AboutTestimonail'
import Story from '../components/About/Story'
import Join from '../components/About/Join'
import Extra from '../components/About/Extra'

const About = () => {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <DailyNews />
      <AboutTestimonail />
      <Story />
      <Join />
      <Extra />
      <Footer />
    </>
  )
}

export default About