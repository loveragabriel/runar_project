import React from 'react';

export const Banner = ({ src }) => {


  return (
    <div style={{ position: 'relative', height: '30vh', overflow: 'hidden', marginTop: '5vh' }}>
      <img src={src} alt="banner" style={{ width: '100%', height: 'auto' }} />
     
    </div>
  );
};
