import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';




export const CartWidget = () => {
    const {cart} = useCartContext(); 
    
   
    return (
        <Link  to={`/ShoppingCart`}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit"  >
            <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        </Link>
    )
}
