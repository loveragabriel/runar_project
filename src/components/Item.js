import React from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { BtnComponent } from './BtnComponent';

const hoverCard = {
  padding: '1em',
  margin: '0.5em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};

const imgContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1em',
}

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
  width: '250px',
  maxHeight: '250px',
}

export const Item = ({ product, likedProducts, handleLike }) => {
  const isProductLiked = likedProducts[product.id];

  return (
    <div>
      <Paper elevation={5} sx={hoverCard}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5'>
            <Link to={`/ItemDetailContainer/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.title}</Link>
          </Typography>          <IconButton onClick={() => handleLike(product.id)}>
            {isProductLiked ? <Favorite color="primary" /> : <FavoriteBorder color="action" />}
          </IconButton>
        </Box>
        <div style={imgContainer}>
          <img src={product.img} alt='img' style={imgStyle} />
        </div>
        <Link to={`/categories/${product.category}`}>
          <Typography variant='h6'>{product.category}</Typography>
        </Link>
        <Typography variant='h6'>$ {product.price}</Typography>
        <Link to={`/ItemDetailContainer/${product.id}`}>
          <BtnComponent>Detalle</BtnComponent>
        </Link>
      </Paper>
    </div>
  )
}
