import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { useState } from 'react'
import {signInWithGoogle, auth} from '../../firebase/firebase'

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="sign-in">
      <h2>Login</h2>
      <p>New To Presence?<a href="/signup">Sign Up For Free</a></p>

      <form>
        <FormInput
          name="email"
          value={email}
          handleChange={handleEmailChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          value={password}
          handleChange={handlePasswordChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit} value="Submit Form">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isLinkedSignIn>{' '}Sign In With Google{''}</CustomButton>
        </div>
      </form>
    </div>
  )
}
