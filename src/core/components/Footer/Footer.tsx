import { rubik } from '@/utils/fonts'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import FazzCoffeIcon from '@/app/icon.png'

const Footer = () => {
  return (
    <Box sx={{ paddingTop: { xs: '5rem', lg: '176px' }, paddingBottom: { xs: '5rem', lg: '96px' }, paddingInline: { xs: '1.5rem', sm: '2.5rem', lg: '150px' }, bgcolor: '#F8F8F8', display: 'flex', gap: { xs: '5rem', lg: '0' }, flexDirection: { xs: 'column-reverse', lg: 'row' }, justifyContent: 'space-between' }}>
      {/* Description */}
      <Box>
        {/* Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
          <Box>
            <Image
              src={FazzCoffeIcon}
              alt='Fazz Coffee Icon'
            />
          </Box>
          <Typography className={rubik.className} variant='h1' sx={{ fontFamily: rubik.style.fontFamily, fontSize: '20px', fontWeight: 700 }}>
            Fazz Coffee
          </Typography>
        </Box>

        {/* Text */}
        <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '500', color: '#4F5665', maxWidth: '340px' }}>
          Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
        </Typography>

        {/* Icons */}
        <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <Link href='#'>
            <Box sx={{ bgcolor: '#FFBA33', maxWidth: 'fit-content', padding: '8px', paddingBottom: '4px', borderRadius: '100%' }}>
              <FacebookIcon sx={{ color: '#6A4029' }} />
            </Box>
          </Link>
          <Link href='#'>
            <Box sx={{ bgcolor: '#FFBA33', maxWidth: 'fit-content', padding: '8px', paddingBottom: '4px', borderRadius: '100%' }}>
              <InstagramIcon sx={{ color: '#6A4029' }} />
            </Box>
          </Link>
          <Link href='#'>
            <Box sx={{ bgcolor: '#FFBA33', maxWidth: 'fit-content', padding: '8px', paddingBottom: '4px', borderRadius: '100%' }}>
              <XIcon sx={{ color: '#6A4029' }} />
            </Box>
          </Link>
        </Box>

        {/* Copyright */}
        <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, color: '#AFB5C0', marginTop: '2rem' }}>
          ©{new Date().getFullYear()} Fazz Coffee
        </Typography >
      </Box >

      {/* Menus */}
      < Box sx={{ display: 'flex', gap: { xs: '3rem', sm: '8rem' } }}>

        {/* Products */}
        < Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '500', fontSize: '18px', color: '#0B132A', marginBottom: '10px' }}>
            Product
          </Typography>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Download
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Pricing
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Locations
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Countries
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Blog
            </Typography>
          </Link>
        </Box >

        {/* Engage */}
        < Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '500', fontSize: '18px', color: '#0B132A', marginBottom: '10px' }}>
            Engage
          </Typography>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Coffe Shop ?
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              FAQ
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              About Us
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Privacy Policy
            </Typography>
          </Link>
          <Link href='#'>
            <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665' }}>
              Terms of Service
            </Typography>
          </Link>
        </Box >
      </Box >
    </Box >
  )
}

export default Footer
