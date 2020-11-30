import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { firestore } from "../../firebase/firebase"
import { formatDate } from "../../helpers"
import "./EntryEdit.scss"

export default function EntryEdit() {
  const [entry, setEntry] = useState("")
  const { currentUserFirestore } = useContext(UserContext)
  const { currentUser } = useContext(UserContext)
  const { id } = useParams()
  let currentEntry = currentUserFirestore.find((entry) => entry.id == id);

  const entryRef = firestore.collection(`users/${currentUser.uid}/Journal Entries`).doc(id)
  // const query = entryRef.where("id", "==", id)

  useEffect(() => {
    setEntry(currentEntry.Body)
  }, [currentEntry])

  const handleChange = (e) => {
    setEntry(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    return entryRef.update({
      Body: entry
    })
      .then(() => {
        console.log("Document successfully updated!")
      })
      .catch((error) => {
        console.error("Error updating document: ", error)
      })
  }

  return (
    <div className="entry-edit">
      <h2>{currentEntry.Title}</h2>
      <form onSubmit={handleSubmit} className="entry-form">
        <p className="entry-date">{formatDate(currentEntry.Created.toDate().toString())}</p>
        <textarea
          className="edit-text"
          value={entry}
          name="entry"
          onChange={handleChange}
        />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  )
}
