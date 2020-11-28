import React, { createContext, useEffect, useState } from 'react'
import { firestore, auth } from '../firebase/firebase'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({})

  const usersRef = firestore.collection('users')

  auth.onAuthStateChanged((user => {
    if (user) {
      setCurrentUser(user)
      console.log(currentUser)
    } else {
      console.log('no current user')
    }
  }))

  return (
    <UserContext.Provider value={{ currentUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider