import React from 'react'
import DailyPrompt from '../DailyPrompt/DailyPrompt'
import PastPrompts from '../PastPrompts.jsx/PastPrompts'
import NewEntryForm from '../NewEntryForm/NewEntryForm'
import "./NewEntry.scss"

export default function NewEntry() {
  return (
    <div className="new-entry">
      <div className="new-entry-left">
        <DailyPrompt />
        <PastPrompts />
      </div>
      <NewEntryForm />
    </div>
  )
}
