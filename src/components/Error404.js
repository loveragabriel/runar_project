import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from './Banner'

export const Error404 = () => {
  return (
    <div >
        <Link to="/">
        <Banner  src='https://cdn.dribbble.com/users/924129/screenshots/4605367/404-runner.gif'/>
        </Link>
    </div>
  )
}
