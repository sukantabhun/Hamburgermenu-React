import Header from '../Header'
import './index.css'

const About = () => (
  <div className="main-container">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="small-screen-about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="large-screen-about"
      />
    </div>
  </div>
)

export default About
