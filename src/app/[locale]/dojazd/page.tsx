import React from 'react'
import DojazdSection from '@/components/DojazdSection'
import HeroDojazd from '@/components/HeroDojazd'
import LocationMap from '@/components/LocationMap'

const Dojazd = () => {
  return (
    <div>
        <HeroDojazd />
        <DojazdSection />
        <LocationMap />
    </div>
  )
}

export default Dojazd