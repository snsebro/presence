import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PlusIcon } from "../../assets/plus-icon.svg"

export default function DailyPrompt() {
  return (
    <div className="daily-prompt">
      <div className="title">
        <h2>Today's Prompt</h2> <Link><PlusIcon/>New Entry</Link>
      </div>
      <p>The two moments I’ll never forget in my life are… Describe them in great detail, and what makes them so unforgettable.</p>
    </div>
  )
}
