import FeaturedCourses from '@/components/featuredcourses/FeaturedCourses'
import HeroSection from '@/components/herosection/HeroSection'
import StickyScrollDemo from '@/components/stickyscroll/StickyScrollDemo'
import React from 'react'


const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollDemo />
    </main>
  )
}

export default Home