import React from 'react'
import NavBar from '../components/NavBar'
import { CategoryCards } from '../components/CategoryCards'
import { Banner } from '../components/Banner';

export const Home = ({src}) => {

  return (
    <div>
      <Banner src='https://thumbs.dreamstime.com/b/running-man-athlete-sport-active-lifestyle-banner-panorama-trail-run-male-runner-sunset-nature-landscape-background-192136325.jpg' style={{ height: '50vh' }}></Banner>
      <CategoryCards />
    </div>
  )
}
