import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='Runar Store - Próximamente'/>
    </div>
  )
}
