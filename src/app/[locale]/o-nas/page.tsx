import HeroAbout from '@/components/HeroAbout'
import Mission from '@/components/Mission'
import OurStory from '@/components/OurStory'
import LocationMap from '@/components/LocationMap';
import React from 'react'

const About = () => {
  return (
    <div>
        <HeroAbout />
        <OurStory />
        <Mission />
        <LocationMap />
    </div>
  )
}

export default About