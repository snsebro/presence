import React, { useContext } from 'react'
import "./YourActivity.scss"
import { firestore } from '../../firebase/firebase'
import {UserContext} from '../../context/UserContext'

export default function YourActivity() {

  const { currentUser } = useContext(UserContext)

  const entryOnDate = async (date) => {
    const userRef = await firestore.collection(`users/${currentUser.uid}/Journal Entries`)

    console.log(userRef)
      
      userRef.where("Date", "==", date).get().then((doc) => {
        if (doc.exists) {
          console.log("entry on today")
          return true
        } else {
          console.log("no entry today")
          return false
        }
    }).catch((error) => {
      console.log("Error gettting document:", error)
    })
  }

  const months = {
    0: ["January", 31],
    1: ["February", 28],
    2: ["March", 31],
    3: ["April", 30],
    4: ["May", 31],
    5: ["June", 30],
    6: ["July", 31],
    7: ["August", 31],
    8: ["September", 30],
    9: ["October", 31],
    10: ["November", 30],
    11: ["December", 31]
  }

  let d = new Date()
  let date = d.getMonth()
  let year = d.getFullYear()
  let month = months[date][0]

  const circles = []


  for (let i = 0; i < months[date][1]; i++) {
    let dayToCheck = `${months[date][0]} ${i + 1}, ${year}`
    console.log(dayToCheck)

    circles.push(<div className={entryOnDate(dayToCheck) ? "entry-today" : "" , "calendar-day"} key={i + 1}>{i + 1}</div>)
  }


  return (
    <div className="your-activity">
      <div className="activity-container">
        <div>
          <h2 className="title">Your Activity
          <span className="month">
              {`${month}, ${year}`}
            </span> </h2>
      
          <div className="calendar">
            {circles}
          </div>
        </div>
      </div>
      {/* <div className="activity-stats">
        <p>Longest Streak</p>
        <p>Last Entry</p>
        <p>First Entry</p>
        <p>Last Entry</p>
      </div> */}
    </div>
  )
}

