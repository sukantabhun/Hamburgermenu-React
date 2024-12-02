import {Link} from 'react-router-dom'
import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu size={32} />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-body">
          <button
            onClick={close}
            data-testid="closeButton"
            type="button"
            className="close-button"
          >
            <IoMdClose size={32} />
          </button>
          <ul className="list">
            <Link to="/">
              <li className="list-item" onClick={close}>
                <AiFillHome size={50} />
                <h1>Home</h1>
              </li>
            </Link>
            <Link to="/about">
              <li className="list-item" onClick={close}>
                <BsInfoCircleFill size={50} />
                <h1>About</h1>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
