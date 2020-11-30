import React, { useContext, useEffect } from 'react'
import { UserContext } from "../../context/UserContext"
import { useParams, Link } from "react-router-dom"
import { formatDate } from "../../helpers"
import "./EntryDetail.scss"

export default function EntryDetail() {
  const { currentUserFirestore } = useContext(UserContext)

  let { id } = useParams()

  let currentEntry = currentUserFirestore.find((entry) => entry.id == id);

  useEffect(() => {

    return () => {
    }
  }, [currentEntry])

  return (
    <div className="entry-detail">
      <p>{currentEntry.Title}</p>
      <p className="entry-date">{formatDate(currentEntry.Created.toDate().toString())}</p>
      <p className="entry">{currentEntry.Body}</p>
      <div className="edit-button">
        <Link to={`/entry/${currentEntry.id}/edit`}><button>Edit Entry</button></Link>
      </div>
    </div>
  )
}
