import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { auth, firestore } from '../../firebase/firebase'
import { UserContext } from '../../context/UserContext'
import { months } from "../../helpers"
import './NewEntryForm.scss'

export default function NewEntryForm() {
  const [entry, setEntry] = useState("")
  const [title, setTitle] = useState("")
  //use this to render a message that says it was submitted
  const [entrySaved, setEntrySaved] = useState(false)

  const { currentUser } = useContext(UserContext)

  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userRef = await firestore.collection(`users/${currentUser.uid}/Journal Entries`)


    const d = new Date()
    const currentDate = Date.now()
    const currentMonth = d.getMonth()
    const dayOfMonth = d.getDate()
    const currentYear = d.getFullYear()
    const createdAt = new Date(currentDate)

    userRef.add({
      Title: title,
      Body: entry,
      Created: createdAt,
      Date: `${months[currentMonth][0]} ${dayOfMonth}, ${currentYear}`
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
      })
      .then(history.push("/dashboard"))
      .catch((error) => {
        console.error("Error adding document: ", error)
      })
  }

  const handleChange = (e) => {
    setEntry(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="new-entry-form">
      <h2>New Entry</h2>
      <label>New Entry</label>
      <input
        required
        type="text"
        placeholder="Entry Title"
        value={title}
        onChange={handleTitleChange} />
      <textarea
        required
        onChange={handleChange}
        placeholder="Entry Text"
      />


      <button type="submit" >Save Entry</button>
    </form>
  )
}
