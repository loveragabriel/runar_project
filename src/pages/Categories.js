import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from '../components/ItemCount';
import { CircularProgress } from '@mui/material';
import { BtnComponent } from '../components/BtnComponent';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { getItemsByCategory } from '../services/firestore';

const hoverCard = {
  padding: '1em',
  margin: '1em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};

// function getItemsById(category) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       const results = products.filter((product) => product.category === category);
//       resolve(results);
//     }, 1000);
//   });
//   return promise;
// }

export const Categories = () => {
  const { itemCategory } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // initialize loading state
  const { setCart } = useCartContext();


   useEffect(() => {
    setLoading(true);
    getItemsByCategory(itemCategory).then((results) => {
      setProduct(results);
      setLoading(false);
    });
  }, [itemCategory]);

  function onAddToCart(count) {
    setCart(count)
    console.log("agreado al carrito!");
}

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="120vh"
    >
      {loading ? ( // check loading status and render progress component if true
        <CircularProgress sx={{ margin: '1em' }} />
      ) : (
        product.map((categoryProduct) => (
          <div key={categoryProduct.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <Paper elevation={5} sx={hoverCard} style={{ width: '100%', maxWidth: '350px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }}>
              <Typography variant='h5'>{categoryProduct.title}</Typography>
            </Box>
            <img src={categoryProduct.img} alt='img' style={{ width: '100%', marginBottom: '1em' }} />
            <Typography variant='h6' style={{ marginBottom: '1em' }}>{categoryProduct.description}</Typography>
            <Typography variant='p' style={{ marginBottom: '1em' }}>{categoryProduct.category}</Typography>
            <Typography variant='h6' style={{ marginBottom: '1em' }}>$ {categoryProduct.price}</Typography>
            <Link to={`/ItemDetailContainer/${categoryProduct.id}`}>
            <BtnComponent>Detalle</BtnComponent>
            </Link>
            <ItemCount

onAddToCart={onAddToCart}
/>              </Paper>
          </div>
        ))
      )}
    </Box>
  );
}
