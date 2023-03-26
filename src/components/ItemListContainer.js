import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Banner } from './Banner';
import products from '../modules/lists';
import { BtnComponent } from './BtnComponent';
import { Link } from 'react-router-dom';

const hoverCard = {
  padding: '1em', 
  margin: '0.5em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  }
};



// get Item List 

function getItems(){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    }, 2500)
  }
  )
  return promesa

}

export const ItemListContainer = (props) => {
  const [likedProducts, setLikedProducts] = useState({});
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getItems().then((respuesta)=> setProductList(respuesta))  
    return () => {
    }
  }, [])
  

  const handleLike = (productId) => {
    setLikedProducts((prevState) => {
      const isProductLiked = prevState[productId];
      return { ...prevState, [productId]: !isProductLiked };
    });
  };

  const cardDetails=()=>{
    // alert('Ir a detalle del producto')
  }

  return (
    <> 
    <Banner src='https://images.squarespace-cdn.com/content/v1/55e61390e4b0169aa80e7b8b/1525983687833-RD1D5OSD8FVI5I7ZJFMP/ultra-running-banner-image.jpg?format=1000w'></Banner>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

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
            <Link to={`/CategoryContainer/${product.category}`}>
            <Typography variant='h6'>{product.category}</Typography>
            </Link>
            <Typography variant='h6'>{product.price}</Typography>
            <Link to={`/ItemDetailContainer/${index}`}>
            <BtnComponent onClick={cardDetails}>Detalle</BtnComponent>
            </Link>
            {props.children}
          </Paper>
        );
      })}
    </div>
    </>
   
  );
};
