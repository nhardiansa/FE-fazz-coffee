'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import useLoginAdapter from '@/features/auth/adapters/login'

export default function NavbarPresenter() {

  const { token, logout } = useLoginAdapter()
  const [openModal, setOpenModal] = useState(false)
  return (
    <Navbar
      isLogged={token.access ? true : false}
      isModalMobileOpen={openModal}
      logoutHandler={() => logout()}
      modalHandler={() => setOpenModal(!openModal)}
    />
  )
}
