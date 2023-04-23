import {
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Paper
} from "@mui/material";


import { useCartContext } from "../context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { BtnComponent } from "../components/BtnComponent";
import { createOrder } from "../services/firestore";
import AlertSuccess from "../components/AlertSuccess";
import { useState } from "react";
import { useNavigate } from "react-router";



export default function Shopping(props) {
  const { cart, setCart, removeItemFromCart, calculateTotalPrice } = useCartContext();
  const [alert, setAlert] = useState(false)
  const [orderId, setOrderId] = useState(null); // add this state variable
  const navigate = useNavigate();



  async function handleCheckout(){
    const order = {
      item: cart, 
      buyer: {name: 'UserName'},
      total: calculateTotalPrice(), 
      date: new Date()
    }
    const orderId = await createOrder(order);
    setOrderId(orderId); // set the orderId in state
    setAlert(true);
    setCart([]);
  }

console.log(createOrder);

function closeAlert(){
  setAlert(false);
  navigate("/");


}



  return (
    <TableContainer component={Paper} sx={{ marginTop: '8em' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price * item.count}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5} align="right">
              Total Price:
            </TableCell>
            <TableCell>{calculateTotalPrice()}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <BtnComponent variant="contained" color="primary" fullWidth onClick={handleCheckout}>
        Finalizar compra
      </BtnComponent>
      {alert ? <AlertSuccess orderId={orderId} closeAlert={closeAlert}/> : ''}
    </TableContainer>
  );
}

