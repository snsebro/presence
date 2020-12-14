import React from 'react'
import { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignUp.scss'

import { auth, createUserProfileDocument } from "../../firebase/firebase"
import { ReactComponent as CheckIcon } from "../../assets/check-icon.svg"

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
    <div className="sign-up-grid">
      <div className="sign-up-left">
        <h2 className="message">
          Take a moment to reflect and clear your mind with Presence.
      </h2>
        <div className="benefits">
          <div className="benefit">
          <CheckIcon className="check-icon"/><p>
              Daily prompts to promote self reflection and mindfulness
        </p>
        </div>
          <div className="benefit">
          <CheckIcon className="check-icon"/><p>
              Daily prompts to promote self reflection and mindfulness
        </p>
        </div>
          <div className="benefit">
          <CheckIcon className="check-icon"/><p>
              Daily prompts to promote self reflection and mindfulness
        </p>
        </div>
          
        </div>
      </div>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <p>Already Have An Account? <a href="/login">Login</a></p>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            placeholder="Email Adress"
            name="email"
            value={email}
            handleChange={handleEmailChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            handleChange={handlePasswordChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleConfirmPasswordChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Create An Account</CustomButton>
        </form>
      </div>

    </div>
  )
}
