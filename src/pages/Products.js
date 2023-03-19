import React from 'react'
import { ProductsCards } from '../components/ProductsCards'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import { Banner } from '../components/Banner'

export const Products = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner  ></Banner>
            <ItemListContainer greeting='Runar Store -  Here are your products' />
            <ProductsCards />
        </div>
    )
}
