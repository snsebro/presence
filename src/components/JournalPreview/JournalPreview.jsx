import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { formatDate } from '../../helpers'

export default function JournalPreview() {
  const { currentUserFirestore } = useContext(UserContext)

  return (
    <div className="journal-preview">
      <h2>Your Journal Entries</h2>
      {currentUserFirestore && currentUserFirestore.map((entry) =>
        <div>
          <p>{formatDate(entry.Created.toDate().toString())}</p>
          <p>{entry.Body}</p>
        </div>
      )}
      <Link to="all-entries">See More...</Link>
    </div>
  )
}
