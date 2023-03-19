import { Typography } from '@mui/material'
import React from 'react'

export const Banner = (props) => {
  return (
    <div style={{marginTop: '12vh'}}>
        <img src={props.src} width='100%' height='10%' alt='banner'/>
    </div>

  )
}
