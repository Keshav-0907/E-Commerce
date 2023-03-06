import React from 'react'
import './Products.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img1 from '/Users/keshavmalik/Desktop/Projects/Ecom1/shop/src/Images/producthead.png'

const Products = () => {
  return (
    <div className='product-main'>
        <div className='product-head'>
            <div className='head-txt'> 
                <h3> Available Store in Your Area </h3>
            </div>

            <div className='head-img'>
                <img src={img1} alt='err'></img>
            </div>
        </div>

        <div className='stores'>
            <div className=''>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        src='http://images.jdmagicbox.com/comp/delhi/e6/011pxx11.xx11.180323011844.y9e6/catalogue/mother-dairy-shop-no-825-noida-dairy-product-retailers-wnrbkl2zle.jpg'
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> Ram Milk Dairy </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get Fresh Milk and Dairy Products on heavy discounted price
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary" href='/RamDairy'>
                        Shop Now
                    </Button>
                </CardActions>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default Products