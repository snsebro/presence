import React from 'react'
import './Homepage.scss'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="first-tile">
        <h1>
          Take A Moment To Reflect
        </h1>
        <Link to="/login"><button>Get Started</button></Link>
      </div>
    </div>
  )
}
