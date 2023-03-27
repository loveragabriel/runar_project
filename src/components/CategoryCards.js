import React from 'react'
import { Paper, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom';

export const CategoryCards = (props) => {
  const categoryList = [
    { name: 'Zapatillas', img: 'https://static.toiimg.com/photo/msid-85651505/85651505.jpg' },
    { name: 'Indumentaria', img: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/63c9903e-2ceb-4df9-a1f6-a7e539e90392/how-to-pick-the-right-clothes-and-shoes-for-race-day.jpg' },
    { name: 'Accesorios', img: 'https://i.imgur.com/QPG9I7C.jpg' }
  ]

  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {categoryList.map((item, index) => (
          <Link to="/Catalogo" key={index}>
            <Paper elevation={5} sx={{ maxWidth: 300, maxHeight: 360, margin: '0.5em' }}>
              <Typography variant='h4'>{item.name}</Typography>
              <img src={item.img} alt={`${item.name} category`} style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </Link>
        ))}
      </Container>
    </div>
  )
}
