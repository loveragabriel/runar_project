import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function CreatePurchaseForm({onSubmit,onClick}) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onSubmit(formData); // Call the onSubmit function with the form data
  };

  const handleClose = () => {
    onClick();
  };



  return (
    <Dialog open >
      <DialogTitle>Crear orden</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            fullWidth
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            fullWidth
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Edad"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            fullWidth
            style={{ marginBottom: 10 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            fullWidth
            style={{ marginBottom: 10 }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} >Cancelar</Button>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>Crear orden</Button>
      </DialogActions>
    </Dialog>
  );
}
