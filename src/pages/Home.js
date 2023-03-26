import React from 'react'
import NavBar from '../components/NavBar'
import { CategoryCards } from '../components/CategoryCards'
import { Banner } from '../components/Banner';


export const Home = () => {



  return (
    <div>
      <NavBar />
      <Banner src='https://thumbs.dreamstime.com/b/running-man-athlete-sport-active-lifestyle-banner-panorama-trail-run-male-runner-sunset-nature-landscape-background-192136325.jpg'></Banner>
      <CategoryCards />
    </div>
  )
}
