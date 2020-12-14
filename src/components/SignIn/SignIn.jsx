import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { useState } from 'react'
import { signInWithGoogle, auth } from '../../firebase/firebase'
import './SignIn.scss'


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
      <p>New To Presence? <a href="/signup">Sign Up For Free</a></p>

      <form className="login-form">
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleEmailChange}
          label="email"
          placeholder="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handlePasswordChange}
          label="password"
          placeholder="Password"
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
