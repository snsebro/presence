import React, { createContext, useState, useEffect } from 'react'
import { auth, firestore } from '../firebase/firebase'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserFirestore, setCurrentUserFirestore] = useState(null)

  const userRef = firestore.collection('users')

  useEffect(() => {
    auth.onAuthStateChanged((user => {
      // if (!userRef.where("uid", "==", user.uid)) {
      //   auth.createUserWithEmailAndPassword(
      //     user.email,
      //     user.password
      //   )
      // }

      if (user) {
        const userFirestoreRef = firestore.collection(`users/${user.uid}/Journal Entries`)
        console.log(userFirestoreRef)
        setCurrentUser(user)
        console.log(currentUser)
        let unsubscribe = userFirestoreRef.onSnapshot(
          (querySnapshot) => {
            let tempEntries = []
            querySnapshot.forEach((doc) => {
              tempEntries.push({
                ...doc.data(),
                id: doc.id
              })
            })
            setCurrentUserFirestore(tempEntries)
          }
        )
        return function cleanup() {
          unsubscribe()
        }
      } else {
        setCurrentUser(null)
        console.log('no current user')
      }
    }))
  },[currentUser])

  return (
    <UserContext.Provider value={{ currentUser, currentUserFirestore }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider