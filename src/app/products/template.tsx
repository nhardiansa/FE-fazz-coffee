import NavbarPresenter from '@/core/components/Navbar/NavbarPresenter'
import { Box } from '@mui/material'
import React from 'react'

function ProductTemplatePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarPresenter />
      <Box sx={{ paddingTop: { md: '89px', sm: '66px', xs: '57px' } }}>
        {children}
      </Box>
    </>
  )
}

export default ProductTemplatePage
