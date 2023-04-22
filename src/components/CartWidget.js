import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import { useCartContext } from '../context/cartContext';




export const CartWidget = () => {
    const {cart} = useCartContext(); 
    
    const handleShippingCart = () => {
        alert('⚠️Próximamente podras ver tus compras aquí \n Working on this 😎')
    }
    return (
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleShippingCart}>
            <Badge badgeContent={cart} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}
