import React, { useState } from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import products from '../modules/lists';

const hoverCard = {
  padding: '1em', 
  margin: '0.5em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};

export const ProductsCards = () => {
  const [likedProducts, setLikedProducts] = useState({});

  const handleLike = (productId) => {
    setLikedProducts((prevState) => {
      const isProductLiked = prevState[productId];
      return { ...prevState, [productId]: !isProductLiked };
    });
  };

  return (
    
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      {products.map((product) => {
        const isProductLiked = likedProducts[product.id];
        return (
          <Paper key={product.id} elevation={5} sx={hoverCard}> 
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5'>{product.title}</Typography>
              <IconButton onClick={() => handleLike(product.id)}>
                {isProductLiked ? <Favorite color="primary" /> : <FavoriteBorder color="action" />}
              </IconButton>
            </Box>
            <img src={product.img} alt='img' style={{ width: '250px' }} />
            <Typography variant='h6'>{product.description}</Typography>
            <Typography variant='h6'>{product.category}</Typography>
            <Typography variant='h6'>{product.price}</Typography>
          </Paper>
        );
      })}
    </div>
  );
};
