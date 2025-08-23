import HeaderReviewsApt from '@/components/HeaderReviewsApt';
import HeroReviews from '@/components/HeroReviews'
import ReviewsComponent from '@/components/Reviews';
import LocationMap from '@/components/LocationMap';
import React from 'react'

const Reviews = () => {
  return (
    <div>
        <HeroReviews />
        <HeaderReviewsApt />
        <ReviewsComponent />
        <LocationMap />
    </div>
  )
}

export default Reviews