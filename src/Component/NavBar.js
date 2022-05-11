import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='navbar'>
      <Link to='/'><li>
          Landing
        </li></Link>
        <Link to='/movie'><li>
          Movie
        </li></Link><Link to='/error'><li>
          Error
        </li></Link>
      </ul>
  )
}

export default NavBar