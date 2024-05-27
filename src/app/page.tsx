import CardHovereffectDemo from '@/components/cardhovereffect/CardHovereffectDemo'
import FeaturedCourses from '@/components/featuredcourses/FeaturedCourses'
import Footer from '@/components/footer/Footer'
import HeroSection from '@/components/herosection/HeroSection'
import InfiniteMovingCardsDemo from '@/components/infinitemovingcardsdemo/InfiniteMovingCardsDemo'
import StickyScrollDemo from '@/components/stickyscroll/StickyScrollDemo'
import Testimonials from '@/components/testimonials/Testimonials'
import React from 'react'


const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollDemo />
      <InfiniteMovingCardsDemo />
      <CardHovereffectDemo />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Home