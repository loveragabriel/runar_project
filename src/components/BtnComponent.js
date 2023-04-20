import React from 'react';
import { Button } from '@mui/material';

export const BtnComponent = (props) => {
  return (
    <div>
      <Button
        variant='contained'
        sx={{
          background: props.color,
          margin: '5px',
          width: '65%',
          height: '1.5rem',
          '@media (min-width:600px)': {
            width: 'auto',
            height: '2.5rem',
          },
        }}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  );
};
