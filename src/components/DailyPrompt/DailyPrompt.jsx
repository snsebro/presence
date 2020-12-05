import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PlusIcon } from "../../assets/plus-icon.svg"
import './DailyPrompt.scss'

export default function DailyPrompt(props) {
  return (
    <div className="daily-prompt">
      <div className="title">
        <h2>Today's Prompt</h2> {props.pathname === "/dashboard" ? <Link to="new-entry"><PlusIcon className="plus-icon"/>New Entry</Link> : null}
      </div>
      <p>The two moments I’ll never forget in my life are… Describe them in great detail, and what makes them so unforgettable.</p>
    </div>
  )
}
