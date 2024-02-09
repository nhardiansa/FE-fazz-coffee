import React from 'react'
import RegisterPage from './RegisterPage'
import RedirectAfterLoggedWrapper from '../components/RedirectAfterLoggedWrapper'

function RegisterPresenter() {
  return (
    <RedirectAfterLoggedWrapper>
      <RegisterPage />
    </RedirectAfterLoggedWrapper>
  )
}

export default RegisterPresenter
