import { Item } from "./Item";

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

export const ItemList = (props) => {
  const { product, likedProducts, handleLike } = props;

  return (
    <div style={listStyle}>
      {product && product.map((product, index) => (
        <Item key={index} product={product} likedProducts={likedProducts} handleLike={handleLike} />
      ))}
    </div>
  );
};
