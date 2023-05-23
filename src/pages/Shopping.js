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
import CreatePurchaseForm from "../components/CreatePurchaseForm";

export default function Shopping(props) {
  const { cart, setCart, removeItemFromCart, calculateTotalPrice } = useCartContext();
  const [alert, setAlert] = useState(false)
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState(null);

  async function handleCheckout() {
    setForm(true);
  }

  function handleClose() {
    setForm(false);
  }

  function handleFormSubmit(formData) {
    const order = {
      item: cart,
      buyer: { name: formData.name, lastName: formData.lastName, age: formData.age, email: formData.email },
      total: calculateTotalPrice(),
      date: new Date()
    }
    createOrder(order).then((orderId) => {
      setOrderId(orderId);
      setForm(false);
      setAlert(true);
      setCart([]);
      setFormData(formData);
    }).catch((error) => {
      console.error('Error creating order:', error);
    });
  }

  function closeAlert() {
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
              <TableCell> $ {item.price}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell> $ {item.price * item.count}</TableCell>
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
            <TableCell colSpan={5} align="right" sx={{fontWeight: 'bold'}}>
              Total de Compra:
            </TableCell>
            <TableCell> $ {calculateTotalPrice()}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <BtnComponent variant="contained" color="primary" fullWidth onClick={handleCheckout}>
        Finalizar compra
      </BtnComponent>
      {form ? <CreatePurchaseForm onSubmit={handleFormSubmit} onClick={handleClose} /> : ''}
      {alert ? <AlertSuccess orderId={orderId} orderName={formData?.name} closeAlert={closeAlert} /> : ''}
    </TableContainer>
  );
}

