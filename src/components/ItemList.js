import { Item } from "./Item";

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

export const ItemList = (props) => {
  const { productList, likedProducts, handleLike } = props;

  return (
    <div style={listStyle}>
      {productList && productList.map((product, index) => (
        <Item key={index} product={product} likedProducts={likedProducts} handleLike={handleLike} />
      ))}
    </div>
  );
};
