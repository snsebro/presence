import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { formatDate, entrySnippet } from '../../helpers'
import './JournalPreview.scss'

export default function JournalPreview() {
  const { currentUserFirestore } = useContext(UserContext)

  return (
    <div className="journal-preview">
      <h2>Your Journal Entries</h2>
      {currentUserFirestore && currentUserFirestore.map((entry) =>
        <>
        {console.log(typeof(entry.Body))}
          <p className="journal-preview-date">{formatDate(entry.Created.toDate().toString())}</p>
          <p className="journal-preview-body">{entry && entrySnippet(entry.Body, 40)}</p>
        </>
      )}
      <Link to="all-entries">See More...</Link>
    </div>
  )
}
