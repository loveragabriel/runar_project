import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CircularProgress } from '@mui/material';


const hoverCard = {
    padding: '1em',
    margin: '10em',
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


    useEffect(() => {
        getItemsById(idItem).then((results) => {
            if (results.length > 0) {
                setProduct(results[0]);
                setLoading(false);
            }
        });
    }, [idItem]);

    return (
        <div >

            {loading ? ( // check loading status and render progress component if true
                <CircularProgress sx={{ margin: '10em' }} />
            ) : <Paper elevation={5} sx={hoverCard}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h5'>{product.title}</Typography>
                </Box>
                <img src={product.img} alt='img' style={{ width: '250px' }} />
                <Typography variant='h6'>{product.description}</Typography>
                <Typography variant='h6'>{product.category}</Typography>
                <Typography variant='h6'>$ {product.price}</Typography>
                <ItemCount></ItemCount>
            </Paper>
            }
        </div>
    )
}
