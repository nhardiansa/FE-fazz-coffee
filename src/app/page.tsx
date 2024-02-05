import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
  Favorite as HeartIcon,
} from "@mui/icons-material";
import { rubik } from '@/utils/fonts'
import FazzButton from "@/core/components/Button/Button";


import HeroBanner from '@/assets/images/hero-banner.jpg'
import TeamWorkDoodle from '@/assets/images/teamwork-doodle.png'
import Milkshake1 from '@/assets/images/milkshake-1.jpg'
import Milkshake2 from '@/assets/images/milkshake-2.jpg'
import Milkshake3 from '@/assets/images/milkshake-3.jpg'
import StoreMapImage from '@/assets/images/store-map.png'

import netflix from '@/assets/images/netflix.png'
import reddit from '@/assets/images/reddit.png'
import amazon from '@/assets/images/amazon.png'
import discord from '@/assets/images/discord.png'
import spotify from '@/assets/images/spotify.png'
import Footer from "@/core/components/Footer/Footer";
import CustomerTestimonies from "@/core/components/CustomerTestimonies/CustomerTestimonies";
import Navbar from "@/core/components/Navbar/Navbar";

const partners = [netflix, reddit, amazon, discord, spotify]

const products = [
  {
    img: Milkshake1,
    name: 'Hazelnut Latte',
    materials: [
      'Hazelnut Syrup',
      'Wanilla Whipped Cream',
      'Ice / Hot',
      'Sliced Banana on Top'
    ],
    price: 'IDR 25.000'
  },
  {
    img: Milkshake2,
    name: 'Pinky Promise',
    materials: [
      '1 Shot of Coffee',
      'Vanilla Whipped Cream',
      'Chocolate Biscuits',
      'Strawberry Syrup',
      'Sliced strawberry on Top'
    ],
    price: 'IDR 30.000'
  },
  {
    img: Milkshake3,
    name: 'Chicken Wings',
    materials: [
      'Wings',
      'Drum Sticks',
      'Mayonaise and Lemon',
      'Hot Fried',
      'Secret Recipe',
      'Buy 1 Get 1 only for Dine in'
    ],
    price: 'IDR 40.000'
  },
]

export default function Home() {
  return (
    <Box sx={{ fontFamily: rubik.style.fontFamily }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <Service />

      {/* Products */}
      <Products />

      {/* Store Map */}
      <StoreMap />

      {/* Partner */}
      <Partner />

      {/* Customer Testimoni */}
      <CustomerTestimonies />

      {/* Promo Card */}
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', left: '15%', top: '-8rem', display: { lg: 'flex', xs: 'none' }, alignItems: 'center', gap: '20rem', width: 'fit-content', paddingInline: '70px', paddingBlock: '2.5rem', borderRadius: '10px', bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography component='p' sx={{ fontFamily: rubik.style.fontFamily, color: '#0B132A', fontSize: '33.18px', fontWeight: '500', width: '18rem' }}>
              Check our promo today!
            </Typography>
            <Typography component='p' sx={{ color: '#4F5665', fontFamily: rubik.style.fontFamily }}>
              Let&apos;s see the deals and pick yours!
            </Typography>
          </Box>
          <FazzButton style={{ borderRadius: '10px', paddingInline: '82px' }}>
            See Promo
          </FazzButton>
        </Box >
      </Box>


      <Footer />
    </Box >
  );
}

const Hero = () => {
  return (
    <Box position='relative' sx={{ paddingTop: '80px' }}>
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '89vh', lg: '85vh' }, backgroundColor: 'black', filter: { sm: 'brightness(60%)', xs: 'brightness(45%)' } }} >
        <Image src={HeroBanner} alt="Hero Banner" fill style={{ objectFit: 'cover' }} />
      </Box>

      <Box position={'absolute'} sx={{ top: '27%', left: { xs: '5%', sm: '10%' }, color: 'white', width: '100%', maxWidth: { xs: '90%', lg: '1200px' } }}>
        <Typography component='p' sx={{ fontWeight: 700, fontSize: { xs: 38, lg: 46 }, maxWidth: { sm: 570, xs: '100%' }, lineHeight: { lg: '70px' }, marginBottom: '19px', }}>
          Start Your Day with Coffee and Good Meals
        </Typography>
        <Typography component='p' sx={{ fontWeight: 700, maxWidth: 450, lineHeight: '30px' }}>
          We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
        </Typography>
        <FazzButton style={{ paddingBlock: '1rem', borderRadius: '10px', maxWidth: '250px', fontWeight: 700, marginInline: 'auto' }}>
          Get Started
        </FazzButton>
      </Box>
    </Box >
  )
}

const Service = () => {
  return (
    <Box sx={{ background: '#FFF', paddingBottom: '82px', paddingTop: '193px', position: 'relative' }}>
      <Container sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column-reverse' }, columnGap: '139px', rowGap: '2rem', alignItems: 'center' }}>
        <Box position='relative' sx={{ height: { xs: 300, sm: 457 }, width: { xs: '100%', lg: 573 } }}>
          <Image src={TeamWorkDoodle} alt="TeamWork Doodle" style={{ objectFit: 'contain' }} fill />
        </Box>
        <Box>
          <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B132A', maxWidth: '432px', textAlign: { xs: 'center', lg: 'start' } }}>
            We Provide Good Coffee and Healthy Meals
          </Typography>
          <Typography sx={{ color: '#4F5665', marginTop: '1.12rem', maxWidth: '428px', textAlign: { xs: 'center', lg: 'start' } }}>
            You can explore the menu that we provide with fun and have their own taste and make your day better.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.94rem', marginTop: '20px' }}>
            {
              [
                "High quality beans",
                "Healthy meals, you can request the ingredients",
                "Chat with our staff to get better experience for ordering",
                "Free member card with a minimum purchase of IDR 200.000."
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircleIcon sx={{ width: '24px', height: '24px', color: '#2FAB73' }} />
                  <Typography component='span' sx={{ color: '#4F5665', fontSize: '14px' }}>
                    {text}
                  </Typography>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Container>

      <Box className='count-testimoni' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'start', rowGap: '1rem', padding: { xs: '1rem 3rem', sm: '67px 3rem' }, width: { xs: '92%', sm: 'fit-content' }, maxWidth: { xs: '100%', lg: '1200px' }, background: '#ffff', boxShadow: '0px 7px 13px 0px #e7e7e7', borderRadius: '10px', position: 'absolute', top: { xs: '-5rem', sm: '-55px' }, left: { xs: '4%', md: '16%' }, zIndex: '20' }}>
        {/* Staff */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { sm: 'center' }, gap: '2rem', minWidth: { lg: '300px', xs: '100%', sm: '200px' } }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '0.88rem 1rem', borderRadius: '100%' }}>
            <PersonIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: { xs: 1, sm: 0 } }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A', textAlign: { xs: 'center', sm: 'start' } }}>90+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665', textAlign: { xs: 'center', sm: 'start' } }}>Staff</Typography>
          </Box>
        </Box>

        {/* Stores */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { sm: 'center' }, gap: '2rem', minWidth: { lg: '300px', xs: '100%', sm: '200px' }, borderInline: { xs: '0', sm: '2px solid #EEEFF2' } }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '0.88rem 1rem', borderRadius: '100%' }}>
            <LocationIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: { xs: 1, sm: 0 } }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A', textAlign: { xs: 'center', sm: 'start' } }}>30+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665', textAlign: { xs: 'center', sm: 'start' } }}>Stores</Typography>
          </Box>
        </Box>

        {/* Customer */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { sm: 'center' }, gap: '2rem', minWidth: { lg: '300px', xs: '100%', sm: '200px' } }}>
          <Box sx={{ color: '#6A4029', background: '#FFBA33', maxWidth: 'fit-content', padding: '1rem 1rem 0.8rem 1rem', borderRadius: '100%' }}>
            <HeartIcon />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: { xs: 1, sm: 0 } }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#0B132A', textAlign: { xs: 'center', sm: 'start' } }}>900+</Typography>
            <Typography sx={{ fontSize: '1.12rem', color: '#4F5665', textAlign: { xs: 'center', sm: 'start' } }}>Customers</Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

const Products = () => {
  return (
    <Box sx={{ background: '#FBFBFB', paddingBlock: '5rem' }}>
      <Container>
        {/* Heading */}
        <Box>
          <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center' }}>
            Here is People&apos;s Favorite
          </Typography>

          <Typography sx={{ color: '#4F5665', marginTop: '1.2rem', width: '100%', textAlign: 'center' }}>
            Let&apos;s choose and have a bit taste of poeple&apos;s favorite. It might be yours too!
          </Typography>
        </Box>

        {/* Products */}
        <Box className="product-container" sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, columnGap: '50px', rowGap: '8rem', justifyContent: 'center', alignItems: { xs: 'center', md: 'stretch' }, marginTop: { xs: '8rem', md: `${183 + 65}px` } }}>

          {
            products.map((item) => (
              <Box key={item.name} className="product" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '50px', width: { xs: '100%', sm: '330px' }, border: '2px solid #DDDDDD', borderRadius: '10px', }}>

                <Box className="image-wrapper" sx={{ position: 'relative', width: '129px', height: '129px', marginBottom: '20px', marginTop: '-65px' }}>
                  <Image
                    alt="milkshake-pict"
                    src={item.img}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '100%' }}
                  />
                </Box>

                <Box className="product-name">
                  <Typography component='h3' sx={{ fontSize: "18px", fontWeight: 500, textAlign: 'center', color: '#0B132A' }}>
                    {item.name}
                  </Typography>
                </Box>

                <Box className="product-materials" sx={{ marginTop: '1.8rem', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                  {
                    item.materials.map((material, index) => (

                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircleIcon sx={{ width: '24px', height: '24px', color: '#2FAB73' }} />
                        <Typography component='span' sx={{ color: '#4F5665', fontSize: '14px' }}>
                          {material}
                        </Typography>
                      </Box>
                    ))
                  }
                </Box>

                <Box className="product-price-buy-act" sx={{ marginTop: '50px' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: 25, color: '#0B332A', width: '100%', textAlign: 'center' }}>
                    {item.price}
                  </Typography>
                  <FazzButton style={{ border: '2px solid #FFBA33', padding: '13px 47px', maxWidth: 'fit-content', boxShadow: '0', marginTop: '20px', backgroundColor: '#ffff' }}>
                    Order Now
                  </FazzButton>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}

const StoreMap = () => {
  return (
    <Box className="store-map" sx={{ background: '#FBFBFB', paddingBlock: '80px' }}>
      <Container>
        <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center', maxWidth: '383px', marginInline: 'auto' }}>
          Visit Our Store in the Spot on the Map Below
        </Typography>

        <Typography sx={{ color: '#4F5665', marginTop: '1.2rem', width: '100%', textAlign: 'center' }}>
          See our store in every city on the spot and spen your good day there. See you soon!
        </Typography>

        <Box className="map-wrapper" sx={{ position: 'relative', maxWidth: '89%', marginInline: 'auto', height: { md: '538px', xs: '250px' }, marginTop: { md: '10rem', xs: '3rem' } }}>
          <Image
            alt="map-store-pict"
            src={StoreMapImage}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Container>
    </Box>
  )
}

const Partner = () => {
  return (
    <Box className="partner" sx={{ background: '#FBFBFB', paddingBlock: '50px' }}>
      <Typography component='h2' sx={{ fontWeight: 500, fontSize: 32, color: '#0B332A', width: '100%', textAlign: 'center', marginInline: 'auto' }}>
        Our Partner
      </Typography>

      <Box className="partners" sx={{ marginTop: '48px', display: 'flex', gap: { xs: '1rem', md: '60px' }, justifyContent: 'center', flexWrap: 'wrap' }}>
        {
          partners.map((item) => (
            <Box key={item.src} className="partner" sx={{ position: 'relative', height: { md: '113px', xs: '70px' }, width: { md: '200px', xs: '100px' }, opacity: '20%' }}>
              <Image
                alt='product'
                src={item}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}
