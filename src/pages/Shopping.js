import { TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Paper } from "@mui/material";

import { useCartContext } from "../context/cartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { BtnComponent } from "../components/BtnComponent";



export default function  Shopping(){
    const { cart, removeItemFromCart, calculateTotalPrice } = useCartContext();
    
    return (
      <TableContainer component={Paper}sx={{marginTop:'8em'}}>
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
                    onClick={() =>  removeItemFromCart(item.id)}
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
        <BtnComponent variant="contained" color="primary" fullWidth>
          Finalizar compra
        </BtnComponent>
      </TableContainer>
    );
  }
  
