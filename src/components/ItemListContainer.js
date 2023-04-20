import React, { useState, useEffect } from 'react';
import { Item } from "./Item";
import { ItemList } from "./ItemList";
import { Banner } from './Banner';
import products from '../modules/lists';
import { BtnComponent } from './BtnComponent';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';




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

  const addToCart=()=>{
    alert('Ir a detalle del producto')
  }

  return (
    <> 
    <Banner src='https://images.squarespace-cdn.com/content/v1/55e61390e4b0169aa80e7b8b/1525983687833-RD1D5OSD8FVI5I7ZJFMP/ultra-running-banner-image.jpg?format=1000w'></Banner>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
    {loading ? ( // check loading status and render progress component if true
                <CircularProgress sx={{marginTop:'10em'}} />
            ) : <ItemList productList={productList} likedProducts={likedProducts} handleLike={handleLike} addToCart={addToCart} />}
    </div>
    </>
   
  );
}; 
