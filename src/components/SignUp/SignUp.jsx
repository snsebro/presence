import React from 'react'
import { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignUp.scss'

import { auth, createUserProfileDocument } from "../../firebase/firebase"

export default function SignUp() {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handlePasswordChange = (e) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target
    setConfirmPassword(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user)

      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <p>Already Have An Account? <a href="/login">Login</a></p>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={email}
          handleChange={handleEmailChange}
          label="email"
          required
        />
        <FormInput
          type="text"
          name="password"
          value={password}
          handleChange={handlePasswordChange}
          label="password"
          required
        />
        <FormInput
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleConfirmPasswordChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Create An Account</CustomButton>
      </form>
    </div>
  )
}
