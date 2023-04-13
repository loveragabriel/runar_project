import { Typography } from '@mui/material'
import React from 'react'

export const Banner = (props) => {

  const h3Style= {
    position:'absolute',
    top:'15vh',
    left:'20vw',
    color:'black'
  }
  return (
    <div style={{marginTop: '12vh'}}>
        <img src={props.src} width='100%' height='10%' alt='banner'/>
        <Typography variant='h3' style={h3Style}>Productos</Typography>
    </div>

  )
}
