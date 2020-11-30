import React, { useContext } from 'react'
import { auth } from '../../firebase/firebase'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as PresenceLogo } from '../../assets/presence-icon.svg'
import { UserContext } from '../../context/UserContext'
import './Header.scss'

export default function Header() {

  const { currentUser } = useContext(UserContext)

  return (
    <header>
      <Link className="logo-container" to="/">
        <h2><PresenceLogo className="logo" />Presence</h2>
      </Link>
      <div className="nav-links-div">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/resources" className="nav-link">
          Resources
        </NavLink>
        {currentUser ? (<div className="nav-link" onClick={() => auth.signOut()}>
          Sign Out
        </div>
        ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
      </div>
    </header>
  )
}
