import React, { Fragment } from 'react'

export const Flex = (props) => {
  return (
    <Fragment style={{display:'flex'}}>
        {props.children}
    </Fragment>
  )
}
