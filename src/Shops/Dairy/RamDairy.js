import React from 'react'
import './ram.css'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import { db } from '/Users/keshavmalik/Desktop/Projects/Ecom1/shop/src/pages/Auth/config.js';




const RamDairy = () => {

  const[product, setproduct] = useState([])
  const productcollection = collection(db, "product")

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(productcollection)
      setproduct(data.docs.map((doc)=> ({...doc.data(), id:doc.id})))

    }
    getUsers()
  })

  return (
    <>
    <div className='main'>
    <h2 className='head'> Ram Milk Dairy </h2>

    <div className='products'>

      {product.map((item) => {
        return (
          <>
          <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
            {item.id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          ₹{item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        Add to Cart
      </Button>
      </CardActions>
    </Card>
          </>
        );
      }
      )}
    </div>

    {/* <div className='contact'>
      <h4> How to Order ?? </h4>
      <p> -- Select the Product </p>
      <p> -- Contact us through Whatsapp, Email, Call </p>
      <p> -- Place your Order</p>
      <p>.</p>

      <p> The order will get delivered ASAP</p>

      <p> Email us : abcd@gmail.com</p>
      <p> Call us : +91 8800880088</p>
      <p> Whatsapp Us : <a href='https://api.whatsapp.com/send/?phone=%2B8800134039&text&type=phone_number&app_absent=0'> Click Here </a></p>
    </div> */}
    </div></>
  )
}

export default RamDairy

