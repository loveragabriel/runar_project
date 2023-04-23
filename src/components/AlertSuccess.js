import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
 

export default function AlertSuccess(props, closeAlert) {
  return (
<Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: '0', bottom: 0, left: 0, right: 0 }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Solicitud Creada</AlertTitle>
        <Typography variant='h6'> {props.orderName} tu Código de compra es:{props.orderId}</Typography>
        <Button color="inherit" size="small">
        <CloseIcon onClick={props.closeAlert} />          
          </Button>
      </Alert>
    </Stack>
  );
}