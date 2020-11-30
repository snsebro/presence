import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { formatDate } from '../../helpers'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg'
import './AllEntries.scss'

export default function AllEntries() {
  const [filterValue, setFilterValue] = useState("")
  const [filteredList, setFilteredList] = useState([])

  const { currentUserFirestore } = useContext(UserContext)
  const { currentUser } = useContext(UserContext)

  const handleChange = (e) => {
  setFilterValue(e.target.value)
  }
  
  useEffect(() => {
    currentUserFirestore && setFilteredList(currentUserFirestore)
  }, [currentUserFirestore])

  useEffect(() => {
    let listFilter = currentUserFirestore
    let filtered = currentUserFirestore && listFilter.filter((entry) => {
      return entry.Body.includes(filterValue)
    })
    console.log(filtered)
    setFilteredList(filtered)
  }, [filterValue])

  return (
    <div className="all-entries">
      <h2>Your Journal Entries</h2>
      <input
        placeholder="Serach"
        type="search"
        name="search"
        value={filterValue}
        onChange={handleChange}>
  
        </input>
      {filteredList.map((entry) =>
        <div>
            <p className="entry-date">
              {formatDate(entry.Created.toDate().toString())}
            </p>
          <Link to={`entry/${entry.id}`}>
          <p className="entry-preview">
            {entry.Body}
          </p>
          </Link>
        </div>
      )}
    </div>
  )
}
