import React from 'react'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { Metadata } from 'next'
import Image from 'next/image'


import SideImage from '@/assets/images/coffeshop-pict.jpg';
import GoogleIcon from '@/assets/images/google-icon.png';
import FazzCoffeIcon from '@/app/icon.png'
import { rubik } from '@/utils/fonts';
import Footer from '@/core/components/Footer/Footer';
import LoginWrapper from '../components/LoginWrapper';

export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginPage() {
  return (
    <Box>
      <Box sx={{ display: 'flex', position: 'relative' }}>

        {/* Side Image */}
        <SideImageBanner />

        {/* Form */}
        <LoginWrapper />

        {/* Create Member Card */}
        <CreateMemberCard />
      </Box>

      {/* Footer */}
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Footer />
      </Box>
    </Box>
  )
}

const CreateMemberCard = () => {
  return (
    <Box sx={{ position: 'absolute', bottom: '-7rem', left: '16vw', display: { lg: 'flex', xs: 'none' }, alignItems: 'center', gap: '20rem', width: 'fit-content', paddingInline: '70px', paddingBlock: '2.5rem', borderRadius: '10px', bgcolor: 'white' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, color: '#0B132A', fontSize: '33.18px', fontWeight: '500', maxWidth: '18rem' }}>
          Get your member card now!
        </Typography>
        <Typography component='p' sx={{ color: '#4F5665', fontFamily: rubik.style.fontFamily }}>
          Let&apos;s join with our member and enjoy the deals.
        </Typography>
      </Box>
      <Button variant="contained" sx={{
        color: '#6A4029', fontWeight: 500, bgcolor: '#FFBA33', ':hover': {
          bgcolor: '#edad3b',
          boxShadow: '0px 2px 4px -1px rgba(255, 186, 51, 0.2), 0px 4px 5px 0px rgba(255, 186, 51, 0.14), 0px 1px 10px 0px rgba(255, 186, 51, 0.12)'
        }, boxShadow: '0px 6px 20px rgba(255, 186, 51, 0.40)', paddingBlock: '1.2rem', paddingInline: '78px', borderRadius: '10px', fontSize: '1rem', fontFamily: rubik.style.fontFamily, textTransform: 'capitalize', marginTop: '2rem'
      }}>
        Create Now
      </Button>
    </Box >
  )
}

const SideImageBanner = () => {
  return (
    <Box sx={{ minWidth: '45%', display: { xs: 'none', lg: 'block' } }}>
      <Box sx={{ position: 'relative', minHeight: '100%' }}>
        <Image
          alt='side-image-banner'
          src={SideImage}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
    </Box>
  )
}
