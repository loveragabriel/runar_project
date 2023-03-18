import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import { ProductsCards } from '../components/ProductsCards'

export const Home = (products) => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='Runar Store -  Here are your products' />
      <ProductsCards />
    </div>
  )
}
