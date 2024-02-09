'use client'

import React, { useEffect } from 'react'
import useLoginAdapter from '../../adapters/login'
import { useRouter } from 'next/navigation'

function RedirectAfterLoggedWrapper({ children }: { children: React.ReactNode }) {

  const router = useRouter()
  const { token } = useLoginAdapter()


  useEffect(() => {
    if (token.access) {
      if (window.history.length) {
        router.back()
      } else {
        router.replace('/')
      }
    }
  }, [token.access])

  if (token.access) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default RedirectAfterLoggedWrapper
