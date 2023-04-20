import products from '../modules/lists';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { cartContext } from '../App';
import { Item } from '../components/Item';
import { Box } from '@mui/material';
import { ItemList } from '../components/ItemList';

const hoverCard = {
  padding: '1em',
  margin: '1em',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
};

function getItemsByCategory(category) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const results = products.filter((product) => product.category === category);
      resolve(results);
    }, 1000);
  });

  return promise;
}

export const Accesorios = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // initialize loading state
  let { itemCategory } = useParams();
  const { likedProducts, handleLike } = props;

  useEffect(() => {
    getItemsByCategory(itemCategory).then((results) => {
      if (results.length > 0) {
        setProduct(results);
        setLoading(false);
      }
    });
  }, [itemCategory]);

  const { cart, setCart } = useContext(cartContext);

  function addToCart(count, currentProduct) {
    const newCartItem = {
      id: currentProduct.id,
      title: currentProduct.title,
      img: currentProduct.img,
      price: currentProduct.price,
      count: count,
    };
    setCart([...cart, newCartItem]);
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="120vh">
      {loading ? (
        // check loading status and render progress component if true
        <CircularProgress sx={{ marginTop: '10em' }} />
      ) : (
        <ItemList>
          {product.map((productItem) => (
            <Item
              key={productItem.id}
              product={productItem}
              likedProducts={likedProducts}
              handleLike={handleLike}
            />
          ))}
        </ItemList>
      )}
    </Box>
  );
};
