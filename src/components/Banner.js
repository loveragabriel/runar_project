import { Typography } from '@mui/material';
import React from 'react';

export const Banner = ({ src }) => {
  const h3Style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'black',
    zIndex: 1,
  };

  return (
    <div style={{ position: 'relative', height: '30vh', overflow: 'hidden', marginTop:'5vh'  }}>
      <img src={src} alt="banner" style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h3" style={h3Style}>
        Productos
      </Typography>
    </div>
  );
};
