import React, { Fragment } from 'react'
import { Paper, Typography, Container } from '@mui/material'
import { BtnComponent } from './BtnComponent'
import { Link } from 'react-router-dom';


export const CategoryCards = (props) => {
    const categotyList =[
        {name:'Shoes', img:'https://static.toiimg.com/photo/msid-85651505/85651505.jpg'}, 
        {name:'Clothing', img: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/63c9903e-2ceb-4df9-a1f6-a7e539e90392/how-to-pick-the-right-clothes-and-shoes-for-race-day.jpg'}, 
        {name:'Accessories', img:'https://i.imgur.com/QPG9I7C.jpg'}
    ]

  return (
    <div> 
        <Container sx={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}  >
       
        {     

            categotyList.map((items, index)=>{
                return(
                    <>
                    <Link to="/Productos">
                    <Paper key={index} elevation={5} sx={{margin:'0.5em'}} >
                        <Typography variant='h4'>{items.name}</Typography>
                        <img  src={items.img} alt={`Category ${items.name}` } width='250px'/>
                    </Paper>
                    </Link>
                    </>
                )
            })
          
        }
          
         </Container  >
         <BtnComponent color='grey'>Text1</BtnComponent>
         <BtnComponent  color='yellow'>Text2</BtnComponent>
         <BtnComponent color='black'>Text3</BtnComponent>

    </div>
  )
}
