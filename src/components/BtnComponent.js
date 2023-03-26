import React from 'react'
import { Button } from '@mui/material'

export const BtnComponent = (props) => {
  
  return (
    <div>
      <Button variant='contained' sx={{background: props.color, margin: '10px'}} onClick={props.onClick}>
          {props.children}
        </Button>
        
    </div>
  )
}
