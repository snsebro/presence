import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../config'

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  
  console.log('userRef')

  if (!snapShot.exists) {
    const { email } = userAuth
    const currentDate = Date.now()
    const createdAt = new Date(currentDate)

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      }).then(() => {
        console.log('user created in db')
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

const twitterProvider = new firebase.auth.TwitterAuthProvider()
twitterProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider)

export default firebase