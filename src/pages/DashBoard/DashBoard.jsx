import React from 'react'
import DailyPrompt from '../../components/DailyPrompt/DailyPrompt'
import JournalPreview from '../../components/JournalPreview/JournalPreview'

export default function DashBoard() {
  return (
    <div className="dashboard">
      <DailyPrompt />
      <JournalPreview />
    </div>
  )
}
