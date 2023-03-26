import React from 'react'
import { BtnComponent } from './BtnComponent'
import { useState } from 'react'

export const ItemCount = (props) => {
    const [count, setCount] = useState(1)

    const addProduct = () => {
        if (count < 10) {
          setCount(count + 1);
        }
        else {alert('Para compras Mayoristas dirigirse a la sección Business')}
      };
    
      const removeProduct = () => {
        if (count > 1) {
          setCount(count - 1);
        } 
      };

  return (
    <div style={{display:'flex'}}>
        <BtnComponent onClick={removeProduct}>-</BtnComponent>
        <BtnComponent color='orange'>{count}</BtnComponent>
        <BtnComponent onClick={addProduct}>+</BtnComponent>

    </div>
  )
}
