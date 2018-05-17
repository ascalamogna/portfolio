import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className='prime-header'>
    <h1>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Anna Scalamogna
      </Link>
    </h1>
    <nav className='prime-nav'>
      <ul>
        <li className='prime-item'><Link to='/'>Work</Link></li>
        <li className='prime-item'><Link to='/about'>About</Link></li>          
      </ul>
    </nav>
  </header>
)

export default Header
