import React from 'react'
import './CustomButton.scss'

export default function CustomButton({ children, isLinkedSignIn, ...otherProps }) {
  return (
    <button className={`${isLinkedSignIn ? 'linked-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}
