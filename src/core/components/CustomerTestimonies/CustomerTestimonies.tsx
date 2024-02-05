'use client'

import { Box, Container, Typography } from '@mui/material'
import {
  Star as StarIcon,
  ArrowBack as ArrowBackIcon
} from "@mui/icons-material";
import React, { useState } from 'react'
import FazzButton from '../Button/Button'
import Image from 'next/image';

import Milkshake1 from '@/assets/images/milkshake-1.jpg'


const reviews: ITestimoni[] = [
  {
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!',
  },
  {
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte',
  },
  {
    name: 'Viezh Robert',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!',
  },
  {
    name: 'Yessica Christy',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!',
  },
  {
    name: 'Yessica Christy',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte',
  },
  {
    name: 'Yessica Christy',
    location: 'Warsaw, Poland',
    rating: '4.5',
    comment: '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!',
  }
]

const CustomerTestimonies = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => {
    setCurrentSlide((curr) => (curr === (reviews.length - 1) ? 0 : curr + 1))
  }

  const prev = () => {
    setCurrentSlide(curr => curr === 0 ? (reviews.length - 1) : curr - 1)
    console.log(reviews.length - 1, currentSlide)
  }

  const goToSpecificSlide = (slide: number) => {
    console.log(slide)
    if (slide !== currentSlide) {
      setCurrentSlide(slide)
    }
  }

  return (
    <Box className="customer-testimoni" sx={{ background: '#FBFBFB', paddingBlock: '50px', paddingBottom: '157px' }}>
      <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: { md: '447px', xs: '90%' }, textAlign: 'center', marginInline: 'auto' }}>
        Loved by Thousands of Happy Customer
      </Typography>
      <Typography sx={{ color: '#4F5665', marginTop: '1.27rem', width: { md: '555px', xs: '90%' }, marginInline: 'auto', textAlign: 'center' }}>
        These are the stories of our customers who have visited us with great pleasure.
      </Typography>

      <Box className="testimonies" sx={{ width: '100%', overflow: 'hidden', marginTop: '60px', paddingInline: '2rem' }}>

        <Box className="testimonies-wrapper" sx={{ display: 'flex', columnGap: { lg: '50px', xs: '1rem', md: '2rem' }, transitionProperty: 'transform', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '150ms', msTransitionDuration: '500ms', transform: { lg: `translateX(-${currentSlide * (260)}px)`, xs: `translateX(-${currentSlide * (315)}px)`, sm: `translateX(-${currentSlide * (300)}px)` }, translate: '' }}>
          {
            reviews.map((review, i) => (
              <Testimoni
                key={i}
                name={review.name}
                location={review.location}
                rating={review.rating}
                comment={review.comment}
              />
            ))
          }
        </Box>

      </Box>

      <Box className="carousel-controll" sx={{ marginTop: '60px' }}>
        <Container sx={{ paddingInline: { lg: '10rem' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box className="dots" sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', maxWidth: { xs: '50%' } }}>
            {
              reviews.map((_, i) => (
                <Box key={i}>
                  {
                    (i !== (reviews.length)) && (
                      <Box sx={{ width: `${i === currentSlide ? '45px' : '15px'}`, height: '15px', background: `${i === currentSlide ? '#6A4029' : '#DDE0E4'}`, borderRadius: `${i === currentSlide ? '20px' : '100%'}`, cursor: 'pointer', transitionDuration: '150ms' }} onClick={() => goToSpecificSlide(i)} />
                    )
                  }
                </Box>
              ))
            }
            {/* <Box sx={{ width: '45px', height: '15px', background: '#6A4029', borderRadius: '15px' }} /> */}
          </Box>
          <Box className="navigations-btn" sx={{ display: 'flex', columnGap: '20px' }}>
            <FazzButton onClick={prev} sx={{ padding: '1.15rem', background: 'transparent', boxShadow: '0', border: '2px solid #6A4029', color: '#6A4029', ':hover': { color: 'white', background: '#6A4029' }, maxWidth: 'fit-content', borderRadius: '100%' }}>
              <ArrowBackIcon />
            </FazzButton>
            <FazzButton onClick={next} sx={{ padding: '1.15rem', background: 'transparent', boxShadow: '0', border: '2px solid #6A4029', color: '#6A4029', ':hover': { color: 'white', background: '#6A4029' }, maxWidth: 'fit-content', borderRadius: '100%' }}>
              <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
            </FazzButton>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

interface ITestimoni {
  name: string
  location: string
  rating: string
  comment: string
}

const Testimoni = (props: ITestimoni) => {
  return (
    <Box className="testimoni" sx={{ border: '2px solid #DDDDDD', borderRadius: '10px', padding: '30px', minWidth: { xs: '100%', sm: '50%', md: '40%', lg: '400px' }, maxWidth: { md: '400px' }, display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      <Box className="user" sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box className="user-pict-profile" sx={{ position: 'relative', width: '50px', height: '50px' }}>
          <Image alt="user-pict" src={Milkshake1} fill style={{ objectFit: 'cover', borderRadius: '100%' }} />
        </Box>
        <Box className="name-address" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 500, color: '#0B132A', fontSize: '18px' }}>
            {props.name}
          </Typography>
          <Typography sx={{ color: '#4F5665', fontSize: '14px' }}>
            {props.location}
          </Typography>
        </Box>
        <Box className="rating" sx={{ display: 'flex', columnGap: '10px' }}>
          <Typography sx={{ color: '#0B132A' }}>
            {props.rating}
          </Typography>
          <StarIcon sx={{ color: '#FEA250' }} />
        </Box>
      </Box>
      <Box className="Description">
        <Typography sx={{ color: '#0B132A' }}>
          {props.comment}
        </Typography>
      </Box>
    </Box>
  )
}

export default CustomerTestimonies
