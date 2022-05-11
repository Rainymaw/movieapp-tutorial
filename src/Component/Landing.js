import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
        <h1>Votre landing</h1>
        <Link to="/movie">
          <button>Accés au site de movies</button>
        </Link>
    </div>
  )
}

export default Landing