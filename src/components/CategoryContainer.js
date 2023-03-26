
import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { BtnComponent } from './BtnComponent';
import { Link } from 'react-router-dom';
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

function getSingleItem(itemCategory) {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === `${itemCategory}`))
        }, 1000)
    })
    return promesa;
}


export const CategoryContainer = (props) => {
    const [product, setProduct] = useState([]);
    let { itemCategory } = useParams();
    const [loading, setLoading] = useState(true); // initialize loading state


    useEffect(() => {

        getSingleItem(itemCategory).then((respuesta) => {
            setProduct(respuesta); 
            setLoading(false); 
        });

        return () => {
            // optional cleanup function here
        }
    }, [itemCategory])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {loading ? ( // check loading status and render progress component if true
                <CircularProgress sx={{marginTop:'20em'}} />
            ) : (
                product.map((product, index) => {
                    return  (
                        <Paper key={index} elevation={5} sx={hoverCard}> 
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant='h5'>{product.title}</Typography>
                            <IconButton >
                            </IconButton>
                          </Box>
                          <img src={product.img} alt='img' style={{ width: '250px' }} />
                          <Typography variant='h6'>{product.description}</Typography>
                          <Link to={`/CategoryContainer/${product.category}`}>
                          <Typography variant='h6'>{product.category}</Typography>
                          </Link>
                          <Typography variant='h6'>{product.price}</Typography>
                          <Link to={`/ItemDetailContainer/${index}`}>
                          <BtnComponent >Detalle</BtnComponent>
                          </Link>
                          {props.children}
                        </Paper>
                      );
                })
            )}
        </div>
    )
}