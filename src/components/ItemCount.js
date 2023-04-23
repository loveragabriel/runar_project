import React from 'react'
import { BtnComponent } from './BtnComponent'
import { useState } from 'react'

export const ItemCount = ({onAddToCart}) => {
  const [count, setCount] = useState(1)

  const addProduct = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    else { alert('Para compras Mayoristas dirigirse a la sección Business') }
  };

  const removeProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BtnComponent onClick={removeProduct} style={{ fontSize: '1.5em' }}>-</BtnComponent>
      <BtnComponent color='orange' style={{ fontSize: '1.5em', margin: '0 1em' }}>{count}</BtnComponent>
      <BtnComponent onClick={addProduct} style={{ fontSize: '1.5em' }}>+</BtnComponent>
      <BtnComponent onClick={() => onAddToCart(count)}>Agregar</BtnComponent>
    </div>
  )
}
