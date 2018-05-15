import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className='prime-header'>
    <div className='inner'>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className='prime-nav'>
        <ul>
          <li className='prime-item'><Link to='/'>Work</Link></li>
          <li className='prime-item'><Link to='/about'>About</Link></li>          
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
