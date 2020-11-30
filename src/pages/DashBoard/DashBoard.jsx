import React from 'react'
import DailyPrompt from '../../components/DailyPrompt/DailyPrompt'
import JournalPreview from '../../components/JournalPreview/JournalPreview'
import YourActivity from '../../components/YourActivity/YourActivity'
import "./DashBoard.scss"

export default function DashBoard(props) {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <DailyPrompt pathname={props.location.pathname} />
        <YourActivity />

      </div>
      <JournalPreview />
    </div>
  )
}
