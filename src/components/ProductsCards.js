import React from 'react'
import { Paper, Typography} from '@mui/material'
import products from '../modules/lists';

const hoverCard = {
  padding:'1em', 
  margin:'0.5em,',
  cursor:'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
}


export const ProductsCards = () => {
  
  return (
    <div style={{display:'flex' , flexDirection:'row', justifyContent: 'space-evenly' ,  flexWrap:'wrap'}}>
          {
            products.map((itmes, index) =>
              <Paper  key={index} elevation={5}  sx={hoverCard}>
              <Typography variant='h5'>{itmes.title}</Typography>
              <img src={itmes.img} alt='img' style={{width:'250px'}}/>
              <Typography variant='h6'>{itmes.description}</Typography>
              <Typography variant='h6' >{itmes.price}</Typography>
              </Paper>
              )
          }
    </div>
  )
}
