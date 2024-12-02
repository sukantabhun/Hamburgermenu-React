import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <Header />
    <div className="notfound-internal-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="notfound-image"
      />
      <h1 className="notfound-heading">Lost Your Way?</h1>
      <p className="notfound-paragraph">
        Sorry, we cannot find that page. You will find lots to explore on the home page
      </p>
    </div>
  </div>
)

export default NotFound
