'use client'

import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

import PromoImage from '@/assets/images/milkshake-3.jpg'
import MenuItemImage from '@/assets/images/milkshake-1.jpg'
import Image from 'next/image'
import { poppins } from '@/utils/fonts'
import Button from '@/core/components/Button/Button'
import Footer from '@/core/components/Footer/Footer'

interface ICategory {
  name: string
  slug: string
  isActive: boolean
}

const rawCategories: ICategory[] = [
  {
    name: 'All Products',
    slug: 'all-products',
    isActive: true
  },
  {
    name: 'Coffee',
    slug: 'coffee',
    isActive: false
  },
  {
    name: 'Non Coffee',
    slug: 'non-coffee',
    isActive: false
  },
  {
    name: 'Foods',
    slug: 'foods',
    isActive: false
  },
  {
    name: 'Add-on',
    slug: 'add-on',
    isActive: false
  },
]

export default function Products() {

  const [categories, setCategories] = useState(rawCategories)

  return (
    <>
      <Box sx={{ display: 'flex' }}>

        {/* Promo List */}
        <Box className='promo-list-container' sx={{ minWidth: '440px', maxWidth: '440px', borderRight: '0.5px solid #cdcdcd' }}>
          <Box className='promo-list-header' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '1rem', paddingTop: '1.75rem' }}>
            <Typography component='h2' sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#6A4029' }}>
              Promo Today
            </Typography>
            <Typography sx={{ fontSize: '12px', maxWidth: '230px', textAlign: 'center' }}>
              Coupons will be updated every weeks. Check them out!
            </Typography>
          </Box>

          {/* Promo list */}
          <Box className="promo-list" sx={{ display: 'flex', flexDirection: 'column', rowGap: '1rem', paddingInline: '50px', marginTop: '3rem' }}>

            {/* Promo Item */}
            {
              [...Array(4)].map((p, i) => (
                <Box key={i} component='div' sx={{ display: 'flex', borderRadius: '20px', bgcolor: '#F5C361', cursor: 'pointer' }}>
                  <Box sx={{ position: 'relative', height: '109px', minWidth: '100px' }}>
                    <Image src={PromoImage} alt='promo-image' fill style={{ borderRadius: '20px 0 0 20px', objectFit: 'cover', width: '100%' }} />
                  </Box>
                  <Box sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', rowGap: '6px', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '14px', fontFamily: poppins.style.fontFamily }}>
                      Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                    </Typography>
                    <Typography sx={{ fontFamily: poppins.style.fontFamily, fontSize: '12px' }}>
                      Valid untill October 10th 2020
                    </Typography>
                  </Box>
                </Box>
              ))
            }
          </Box>

          {/* Apply Coupon */}
          <Box sx={{ paddingInline: '50px', marginTop: '3rem' }}>
            <Button style={{ borderRadius: '20px', boxShadow: '0', marginTop: 0, fontWeight: 700, fontFamily: poppins.style.fontFamily, backgroundColor: '#6A4029', color: 'white', ':hover': { backgroundColor: '#5d3824' } }}>
              Apply Coupon
            </Button>
          </Box>

          {/* Terms and Condition */}
          <Box sx={{ paddingInline: '50px', paddingBottom: '4.5rem', marginTop: '4rem' }}>
            <Typography sx={{ fontSize: '12px', color: '#4F5665' }}>
              <Typography component='span' sx={{ fontWeight: 700, fontSize: '12px' }}>Terms and Condition</Typography> <br />
              1. You can only apply 1 coupon per day <br />
              2. It only for dine in <br />
              3. Buy 1 get 1 only for new user <br />
              4. Should make member card to apply coupon
            </Typography>
          </Box>

        </Box>

        {/* Product List */}
        <Box className='product-list-container' sx={{ width: '100%' }}>

          {/* Categories Control Bar */}
          <Box sx={{ display: 'flex', columnGap: '2rem', justifyContent: 'center' }}>
            {
              categories.map((c, i) => (
                <Box key={c.slug} sx={{ padding: '1.5rem', paddingBottom: '0.5rem', borderBottom: c.isActive ? '3px solid #6A4029' : '0', cursor: 'pointer' }}>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: c.isActive ? 700 : 400, color: c.isActive ? '#6A4029' : '#9F9F9F' }}>
                    {c.name}
                  </Typography>
                </Box>
              ))
            }
          </Box>

          {/* Product List */}
          <Box className='product-list-container' sx={{ paddingTop: `${2 + 4}rem`, marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', columnGap: '35px', rowGap: `${2 + 3}rem`, maxWidth: '752px', marginInline: 'auto' }}>

            {
              [...Array(12)].map((p, i) => (
                <Box key={i} className='product-item' sx={{ maxWidth: '156px', paddingTop: '', paddingBottom: '1.8rem', paddingInline: '0.75rem', boxShadow: '0px 5px 5px rgba(57, 57, 57, 0.1)', borderRadius: '30px' }}>
                  <Box sx={{ position: 'relative', width: '129px', height: '129px', marginTop: '-2rem' }}>
                    <Image src={MenuItemImage} alt='menu-item-image' style={{ objectFit: 'cover', borderRadius: '100%' }} fill />
                  </Box>

                  {/* Desc */}
                  <Box className="text-container">
                    <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 900, color: 'black', fontSize: '1.38rem', textAlign: 'center' }}>
                      Veggie tomato mix
                    </Typography>
                    <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, color: '#6A4029', fontSize: '1rem', textAlign: 'center' }}>
                      IDR 34.000
                    </Typography>
                  </Box>
                </Box>
              ))
            }
          </Box>

        </Box>
      </Box>
      <Footer />
    </>
  )
}
