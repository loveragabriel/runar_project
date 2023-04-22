import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { cartContext } from '../App';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { BtnComponent } from './BtnComponent';

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

export const ItemDetail = () => {
    const [product, setProduct] = useState({});
    let { idItem } = useParams();
    const [loading, setLoading] = useState(true); // initialize loading state

    const { cart } = useContext(cartContext)

    useEffect(() => {
        getItemsById(idItem).then((results) => {
            if (results.length > 0) {
                setProduct(results[0]);
                setLoading(false);
            }
        });
    }, [idItem]);

    function addToCart(count) {
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
                    <Typography variant='h6'>{product.description}</Typography>
                    <Link to={`/category/${product.category}`}>
                        <Typography variant='h6'>{product.category}</Typography>
                    </Link>
                    <Typography variant='h6'>$ {product.price}</Typography>
                    <Link to={`/ItemDetailContainer/${product.id}`}>
                        <BtnComponent>Detalle</BtnComponent>
                    </Link>
                </Paper>
            )}
        </Box>
    )
}
