// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul className="list-container">
      <Link to="/">
        <li className="each-item">Home</li>
      </Link>
      <Link to="/about">
        <li className="each-item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
