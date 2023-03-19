import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import { CategoryCards } from '../components/CategoryCards'
import { Link } from 'react-router-dom';
import { Banner } from '../components/Banner';


export const Home = () => {



  return (
    <div>
      <NavBar />
      {/* <ItemListContainer greeting='Runar Store -  Here are your products' /> */}
      <Banner src='https://thumbs.dreamstime.com/b/running-man-athlete-sport-active-lifestyle-banner-panorama-trail-run-male-runner-sunset-nature-landscape-background-192136325.jpg'></Banner>
      <Link to="/products">
      <CategoryCards  />
      </Link>
      
    </div>
  )
}
