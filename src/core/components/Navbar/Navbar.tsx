'use client'

import { Avatar, Box, Container, InputAdornment, Modal, SxProps, TextField, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import {
  Search as SearchIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material'

import BrandIcon from '@/app/icon.png'
import PeoplePlaceholder from '@/assets/images/people-placeholder.png'
import { rubik } from '@/utils/fonts'
import FazzButton from '../Button/Button'

const mainMenu = [
  {
    text: 'Home',
    href: '#'
  },
  {
    text: 'Product',
    href: '#'
  },
  {
    text: 'Your Cart',
    href: '#'
  },
  {
    text: 'History',
    href: '#'
  },
]

const modalStyle: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '80%', sm: '40%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '1rem',
  border: '0',
  p: '1.5rem',
};

const Navbar = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Box component='nav' sx={{ width: '100%', backgroundColor: '#fff', position: 'fixed', zIndex: '100' }}>
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', marginInline: 'auto', paddingBlock: '21.5px' }}>
            {/* Brand */}
            <Link href='/'>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Box position='relative'>
                  <Image
                    alt="Fazz Coffee Icon"
                    src={BrandIcon}
                    width={30}
                    height={33}
                  />
                </Box>

                <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '20px', color: '#0B132A', display: { xs: 'none', sm: 'block' } }}>
                  Fazz Coffee
                </Typography>
              </Box>
            </Link>

            {/* Menus */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '38px' }}>
              {
                mainMenu.map(menu => (
                  <Link key={menu.text} href={menu.href}>
                    <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
                      {menu.text}
                    </Typography>
                  </Link>
                ))
              }
            </Box>

            {/* Others */}
            <Box sx={{ display: 'flex', gap: { xs: '1rem', sm: '2rem' }, alignItems: 'center' }}>
              <TextField id="search-product-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ marginBottom: '-3px', marginLeft: '-0.2rem' }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                // variant="filled"
                placeholder="Search"
                sx={{ display: { xs: 'none', sm: 'block' }, '.MuiInputBase-input': { paddingBlock: '8px', paddingLeft: '0' }, '.MuiInputBase-root': { borderRadius: '30px' }, maxWidth: '178px', backgroundColor: '#EFEEEE', borderRadius: '30px' }}
                inputProps={{ sx: { fontFamily: rubik.style.fontFamily } }}
              />

              {/* Chat */}
              <Box>
                <QuestionAnswerIcon sx={{ color: '#4F5665', cursor: 'pointer' }} />
              </Box>

              {/* Profile */}
              <Avatar alt="Remy Sharp" src={PeoplePlaceholder.src} sx={{ cursor: 'pointer', width: { xs: '2rem', sm: '40px' }, height: { xs: '2rem', sm: '40px' } }} />

              {/* Login Button */}
              {/* <Box className="btn-wrapper" sx={{ width: 'fit-content', display: { xs: 'none', md: 'block' } }}>
                <FazzButton style={{ paddingBlock: '9px', margin: '0', width: '150px' }}>
                  Sign In
                </FazzButton>
              </Box> */}

              {/* Menu button in mobile */}
              <Box className="menu-mobile" sx={{ display: { md: 'none' }, cursor: 'pointer' }} onClick={() => setOpenModal(true)}>
                {
                  openModal ? (
                    <CloseIcon sx={{ width: '1.5rem', height: '1.5rem', color: '#4F5665', fontSize: '2rem' }} />
                  ) : (
                    <MenuIcon sx={{ width: '1.5rem', height: '1.5rem', color: '#4F5665', fontSize: '2rem' }} />
                  )
                }
              </Box>
            </Box>
          </Box>
        </Container >
      </Box >

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>

          {/* Search */}
          <Box sx={{ width: '100%', marginBottom: '1.5rem' }}>
            <TextField id="search-product-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ marginBottom: '-3px', marginLeft: '-0.2rem' }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              // variant="filled"
              placeholder="Search"
              sx={{ '.MuiInputBase-input': { paddingBlock: '8px', paddingLeft: '0' }, '.MuiInputBase-root': { borderRadius: '30px' }, width: '100%', backgroundColor: '#EFEEEE', borderRadius: '30px' }}
              inputProps={{ sx: { fontFamily: rubik.style.fontFamily } }}
            />
          </Box>

          {/* Menu */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '38px' }}>
            {
              mainMenu.map(menu => (
                <Link key={menu.text} href={menu.href}>
                  <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, color: '#4F5665', ':hover': { textDecorationLine: 'underline' } }}>
                    {menu.text}
                  </Typography>
                </Link>
              ))
            }
          </Box>

          {/* Buttons */}
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '2rem', rowGap: '1rem', alignItems: 'center' }}>
            <FazzButton style={{ paddingBlock: '5px', borderRadius: '0.7rem', maxWidth: '10rem', margin: 0 }}>
              Sign In
            </FazzButton>
            <FazzButton style={{ paddingBlock: '5px', borderRadius: '0.7rem', maxWidth: '10rem', margin: 0, backgroundColor: 'white', border: '2px solid #FFBA33' }}>
              Register
            </FazzButton>
          </Box>
        </Box>
      </Modal>

    </>
  )
}

export default Navbar
