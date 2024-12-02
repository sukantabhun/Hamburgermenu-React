import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-container">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="small-screen-home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="large-screen-home"
      />
    </div>
  </div>
)

export default Home
