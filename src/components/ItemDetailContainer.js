import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';


const hoverCard = {
    padding: '1em',
    margin: '10em',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.1)',
    }
};

function getSingleItem(indexItem) {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[indexItem])
        }, 1000)
    })
    return promesa;
}


export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([]);
    let { indexItem } = useParams();
    console.log(indexItem)



    useEffect(() => {
        getSingleItem(indexItem).then((respuesta) => setProduct(respuesta))

        return () => {
            // optional cleanup function here
        }
    }, [indexItem])


    return (
        <div>
            {/* <Banner src='https://kinsta.altitude-sports.com/wp-content/uploads/2020/06/Blog-Banner-C.jpg'/> */}
            <Paper elevation={5} sx={hoverCard}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h5'>{product.title}</Typography>
                </Box>
                <img src={product.img} alt='img' style={{ width: '250px' }} />
                <Typography variant='h6'>{product.description}</Typography>
                <Typography variant='h6'>{product.category}</Typography>
                <Typography variant='h6'>{product.price}</Typography>
                {props.children}
            </Paper>
        </div>
    )
}
