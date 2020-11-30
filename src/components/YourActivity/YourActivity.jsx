import React from 'react'
import { ReactComponent as ActivityGrid } from "../../assets/activity-grid.svg"

export default function YourActivity() {
  return (
    <div className="your-activity">
      <div className="activity-container">
        <div className="calendar">
          <h2>Your Activity</h2>
          <ActivityGrid className="activity-calendar"/>
        </div>

      </div>
        <div className="activity-stats">
            <p>Longest Streak</p>
            <p>Last Entry</p>
            <p>First Entry</p>
            <p>Last Entry</p>
        </div>
    </div>
  )
}

