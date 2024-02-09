import React, { ChangeEvent, FormEvent } from 'react'
import { Alert, Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'

import FazzCoffeIcon from '@/app/icon.png'
import GoogleIcon from '@/assets/images/google-icon.png';
import { rubik } from "@/utils/fonts"

import SideImage from '@/assets/images/coffeshop-pict.jpg';
import Footer from '@/core/components/Footer/Footer';
import Link from 'next/link'

export interface PropsLoginPage {
  email: string;
  password: string;
  message: string;
  success: boolean;
  isLoading: boolean;
  onLoginSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function LoginPage({ email, isLoading, message, onEmailChange, onLoginSubmit, onPasswordChange, password, success }: PropsLoginPage) {
  return (
    <Box>
      <Box sx={{ display: 'flex', position: 'relative' }}>

        {/* Side Image */}
        <SideImageBanner />

        {/* Form */}
        <FormLogin
          email={email}
          password={password}
          isLoading={isLoading}
          message={message}
          success={success}
          onEmailChange={onEmailChange}
          onLoginSubmit={onLoginSubmit}
          onPasswordChange={onPasswordChange}
        />

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

interface PropsLoginForm {
  email: string;
  password: string;
  message: string;
  success: boolean;
  isLoading: boolean;
  onLoginSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const FormLogin = (props: PropsLoginForm) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ paddingTop: '2rem', paddingBottom: { lg: '5rem', xs: '3rem' }, paddingInline: { lg: '55px', md: '2rem' } }}>


        {/* Header */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between' }}>
          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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

          {/* button */}
          <Link href='/register'>
            <Button variant="contained" sx={{
              color: '#6A4029',
              fontWeight: 500,
              bgcolor: '#FFBA33',
              ':hover': {
                bgcolor: '#edad3b',
                boxShadow: '0px 2px 4px -1px rgba(255, 186, 51, 0.2), 0px 4px 5px 0px rgba(255, 186, 51, 0.14), 0px 1px 10px 0px rgba(255, 186, 51, 0.12)'
              },
              boxShadow: '0px 6px 20px rgba(255, 186, 51, 0.40)',
              paddingBlock: '13px',
              paddingInline: '45px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontFamily: rubik.style.fontFamily,
              textTransform: 'capitalize'
            }}>
              Sign Up
            </Button>
          </Link>
        </Box>


        {/* Form */}
        <form onSubmit={props.onLoginSubmit}>
          <Box sx={{ marginBlock: { lg: '5rem', sm: '2.3rem' }, paddingInline: { lg: '5rem', sm: '7rem', xs: '1.5rem', } }}>
            <Typography variant='h2' sx={{ color: '#6A4029', fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '2.074rem', textAlign: 'center' }}>
              Login
            </Typography>

            <Box sx={{ marginTop: '45px', marginBottom: '20px' }}>
              {
                props.message && (
                  <Alert severity={`${props.success ? 'success' : 'error'}`}>{props.message}</Alert>
                )
              }
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              <InputLabel htmlFor='email' sx={{ color: '#4F5665', fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '1rem' }}>
                Email Address:
              </InputLabel>
              <TextField value={props.email} onChange={props.onEmailChange} id='email' name='email' placeholder='Enter your email adress' fullWidth variant='outlined' sx={{ '.MuiInputBase-input': { paddingBlock: '23.04px', paddingLeft: '27.65px', borderColor: '#4F5665' } }} InputProps={{ sx: { fontFamily: rubik.style.fontFamily, borderRadius: '20px', } }} />
            </Box>

            {/* Password */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '13px', marginTop: '28px' }}>
              <InputLabel htmlFor='password' sx={{ color: '#4F5665', fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '1rem' }}>
                Password:
              </InputLabel>
              <TextField value={props.password} onChange={props.onPasswordChange} id='password' type="password" name='password' placeholder='Enter your password' fullWidth variant='outlined' sx={{ '.MuiInputBase-input': { paddingBlock: '23.04px', paddingLeft: '27.65px', borderColor: '#4F5665' } }} InputProps={{ sx: { fontFamily: rubik.style.fontFamily, borderRadius: '20px', } }} />
            </Box>

            <Box sx={{ marginTop: '1.12rem' }}>
              <Link href='#'>
                <Typography component='span' sx={{ fontFamily: rubik.style.fontFamily, fontWeight: '700', fontSize: '1rem', color: '#6A4029', textDecorationLine: 'underline' }}>Forgot password?</Typography>
              </Link>
            </Box>

            {/* Main Button */}
            <Button disabled={props.isLoading} type="submit" fullWidth variant="contained" sx={{
              color: '#6A4029', fontWeight: 500, bgcolor: '#FFBA33', ':hover': {
                bgcolor: '#edad3b',
                boxShadow: '0px 2px 4px -1px rgba(255, 186, 51, 0.2), 0px 4px 5px 0px rgba(255, 186, 51, 0.14), 0px 1px 10px 0px rgba(255, 186, 51, 0.12)'
              }, boxShadow: '0px 6px 20px rgba(255, 186, 51, 0.40)', paddingBlock: '1.2rem', paddingInline: '45px', borderRadius: '50px', fontSize: '1rem', fontFamily: rubik.style.fontFamily, textTransform: 'capitalize', marginTop: '2rem'
            }}>
              {
                props.isLoading ? 'Loading....' : 'Sign In'
              }
            </Button>

            {/* OAuth Button */}
            <Button fullWidth variant="contained" sx={{
              color: '#6A4029', fontWeight: 500, bgcolor: '#FFF', ':hover': {
                bgcolor: '#fcfcfc',
                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
              }, boxShadow: '0px 6px 20px 0px rgba(196, 196, 196, 0.67)', paddingBlock: '1.2rem', paddingInline: '45px', borderRadius: '50px', fontSize: '1rem', fontFamily: rubik.style.fontFamily, textTransform: 'capitalize', marginTop: '2rem'
            }}>
              <Image alt='google-icon' src={GoogleIcon} height={32} width={32} />
              <Box component='span' sx={{ marginLeft: '5px' }}>
                Login with Google
              </Box>
            </Button>
          </Box>
        </form>
      </Box >
    </Box >
  )
}
