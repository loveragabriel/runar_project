import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CircularProgress } from '@mui/material';
import { useCartContext } from '../context/cartContext';
import { getSingleItem } from '../services/firestore';

const hoverCard = {
    padding: '1em',
    margin: '1em',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    }
};

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    let { idItem } = useParams();
    const [loading, setLoading] = useState(true); // initialize loading state
    const { getCountInCart , addItem} = useCartContext();


    useEffect(() => {
        getSingleItem(idItem).then((results) => {
            if (results) {
                setProduct(results);
                setLoading(false);
            }
        });
    }, [idItem]);

    function onAddToCart(count) {
        addItem(product, count);
        console.log("agreado al carrito!");
      }

          const countInCart = getCountInCart(product.id);
      console.log(countInCart);
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
                <Paper elevation={5} sx={hoverCard} style={{ width: '100%', maxWidth: '350px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }}>
                        <Typography variant='h5'>{product.title}</Typography>
                    </Box>
                    <img src={product.img} alt='img' style={{ width: '100%', marginBottom: '1em' }} />
                    <Typography variant='h6' style={{ marginBottom: '1em' }}>{product.description}</Typography>
                    <Typography variant='p' style={{ marginBottom: '1em' }}>{product.category}</Typography>
                    <Typography variant='h6' style={{ marginBottom: '1em' }}>$ {product.price}</Typography>
                    <ItemCount stock={product.stock - countInCart}onAddToCart={onAddToCart}/> 
                </Paper>
            )}
        </Box>
    )
}
