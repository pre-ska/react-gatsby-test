import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Header.css'

// const Header = ({ siteTitle }) => {
//   const [state, setState] = useState(null)
//   return (
//     <div className="Header">
//       <div className="HeaderGroup">
//         <Link to="/">
//           <img
//             src={require('../images/logo-designcode.svg')}
//             width="30"
//             alt=""
//           />
//         </Link>
//         <Link to="/courses">Courses</Link>
//         <Link to="/downloads">Downloads</Link>
//         <Link to="/workshops">Workshops</Link>
//         <Link to="/buy">
//           <button>Buy</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

class Header extends Component {
  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const scrollTop = window.pageYOffset

    scrollTop > 50
      ? this.setState({ hasScrolled: true })
      : this.setState({ hasScrolled: false })
  }

  render() {
    const { hasScrolled } = this.state
    return (
      <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require('../images/logo-designcode.svg')}
              width="30"
              alt=""
            />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
