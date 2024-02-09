'use client'

import React, { useEffect } from 'react'
import LoginPage, { PropsLoginPage } from './LoginPage'
import useLoginAdapter from '../../adapters/login'
import RedirectAfterLoggedWrapper from '../components/RedirectAfterLoggedWrapper'

function LoginPresenter() {
  const { setCredential, login, credential, status, setStatus } = useLoginAdapter()

  const onInputChange: PropsLoginPage['onEmailChange'] | PropsLoginPage['onPasswordChange'] = (e) => {
    setCredential({ ...credential, [e.currentTarget.name]: e.target.value })
  }

  const submitLogin: PropsLoginPage['onLoginSubmit'] = (e) => {
    e.preventDefault()
    setStatus({ ...status, loading: true, message: '' })
    login()
  }

  // clear unused state after leave login page
  useEffect(() => {
    return () => {
      setStatus({ message: '', success: false, loading: false })
      setCredential({ email: '', password: '' })
    }
  }, [])
  return (
    <RedirectAfterLoggedWrapper>
      <LoginPage
        isLoading={status.loading}
        message={status.message}
        success={status.success}
        email={credential.email}
        password={credential.password}
        onLoginSubmit={submitLogin}
        onEmailChange={onInputChange}
        onPasswordChange={onInputChange}
      />
    </RedirectAfterLoggedWrapper>
  )
}

export default LoginPresenter
