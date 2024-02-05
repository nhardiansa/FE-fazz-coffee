'use client'

import React from 'react'
import FormLogin, { PropsFormLogin } from './LoginForm'
import useLoginAdapter from '../../adapters/login'

function LoginWrapper() {
  const { setEmail, setPassword, login, credential } = useLoginAdapter()

  const onInputChange: PropsFormLogin['onEmailChange'] | PropsFormLogin['onPasswordChange'] = (e) => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  const submitLogin: PropsFormLogin['onLoginSubmit'] = (e) => {
    e.preventDefault()
    login()
  }

  return (
    <FormLogin
      email={credential.email}
      password={credential.password}
      onLoginSubmit={submitLogin}
      onEmailChange={onInputChange}
      onPasswordChange={onInputChange}
    />
  )
}

export default LoginWrapper
