import { Paper, Typography, Box, IconButton } from '@mui/material';

import { Favorite, FavoriteBorder } from '@mui/icons-material';

const hoverCard = {
  padding: '1em',
  margin: '0.5em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};

export const ItemList = (props) => {
  const { productList, likedProducts, handleLike } = props;

  return (
    <div>
      {productList.map((product, index) => {
        const isProductLiked = likedProducts[product.id];
        return (
          <Paper key={index} elevation={5} sx={hoverCard}>
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

            {props.children}
          </Paper>
        );
      })}
    </div>
  );
};
