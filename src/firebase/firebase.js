import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0rra6n-qMtUC56ZLxGjTJZ4IQqxMhCs8",
  authDomain: "presence-2020.firebaseapp.com",
  databaseURL: "https://presence-2020.firebaseio.com",
  projectId: "presence-2020",
  storageBucket: "presence-2020.appspot.com",
  messagingSenderId: "188956946761",
  appId: "1:188956946761:web:0fe2b95e17a19fe0bd2a98",
  measurementId: "G-63TNDFQ67X"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  // const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  
  console.log('userRef')

  if (!snapShot.exists) {
    const { email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      }).then(() => {
        alert('user created in db')
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