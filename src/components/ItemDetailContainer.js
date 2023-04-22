import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
const hoverCard = {
    padding: '1em',
    margin: '1em',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    }
};

function getItemsById(id) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            const results = products.filter((product) => product.id === Number(id));
            resolve(results);
        }, 1000);
    });

    return promise;
}

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    let { idItem } = useParams();
    const [loading, setLoading] = useState(true); // initialize loading state

    const {cart} = useContext(cartContext)

    useEffect(() => {
        getItemsById(idItem).then((results) => {
            if (results.length > 0) {
                setProduct(results[0]);
                setLoading(false);
            }
        });
    }, [idItem]);

    function addToCart(count){
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
                <Paper elevation={5} sx={hoverCard} style={{ width: '100%', maxWidth: '350px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1em' }}>
                        <Typography variant='h5'>{product.title}</Typography>
                    </Box>
                    <img src={product.img} alt='img' style={{ width: '100%', marginBottom: '1em' }} />
                    <Typography variant='h6' style={{ marginBottom: '1em' }}>{product.description}</Typography>
                    <Typography variant='p' style={{ marginBottom: '1em' }}>{product.category}</Typography>
                    <Typography variant='h6' style={{ marginBottom: '1em' }}>$ {product.price}</Typography>
                    <ItemCount onAdd={addToCart} />
                </Paper>
            )}
        </Box>
    )
}
