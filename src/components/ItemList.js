import { Paper, Typography, Box, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import products from '../modules/lists';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { BtnComponent } from './BtnComponent';



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

function getItems(){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products)
    }, 2500)
  }
  )
  return promesa

}

export const ItemList = (props) => {
  const [likedProducts, setLikedProducts] = useState({});
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true); // initialize loading state

  useEffect(() => {
    getItems().then((respuesta)=> {
      setProductList(respuesta);
      setLoading(false); 
    })  
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
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
      {loading ? ( // check loading status and render progress component if true
                <CircularProgress sx={{marginTop:'10em'}} />
            ) : productList.map((product, index) => {
        const isProductLiked = likedProducts[product.id];
        return (
          <Paper key={product.id} id={product.id} elevation={5} sx={{hoverCard}} > 
            <Box sx={{ padding:'15px', margin:'20px'}}>
              <Typography variant='h5'>{product.title}</Typography>
              <IconButton onClick={() => handleLike(product.id)}>
                {isProductLiked ? <Favorite color="primary" /> : <FavoriteBorder color="action" />}
              </IconButton>
            </Box>
            <img src={product.img} alt='img' style={{ width: '250px' }} />
            <Typography variant='h6'>{product.description}</Typography>
            <Link to={`/CategoryContainer/${product.category}`}>
            <Typography variant='p'>{product.category}</Typography>
            </Link>
            <Typography variant='h6'> $ {product.price}</Typography>
            <Link to={`/ItemDetailContainer/${product.id}`}>
            <BtnComponent onClick={cardDetails}>Detalle</BtnComponent>
            </Link>
            {props.children}
          </Paper>
        );
      })}



      {/* {productList.map((product, index) => {
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
      })} */}
    </div>
  );
};
