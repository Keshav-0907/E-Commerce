import React from 'react'
import './Admin.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react';
import { addDoc, collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../Auth/config';
import { useAuth0 } from "@auth0/auth0-react";




const Admin = () => {


  const { user } = useAuth0();
  const { logout } = useAuth0();


  const [newtitle, setnewtitle] = useState("")
  const [newprice, setnewprice] = useState("")
  const [newurl, setnewurl] = useState("")

  const [product, setproduct] = useState([])
  const productcollection = collection(db, "product")

  const addproduct = async () => {
    await addDoc(productcollection, { title: newtitle, price: newprice, url: newurl })
    alert('Product Added Succesfully')
  }

  const deleteProd = async (id) => {
    const userDoc = doc(db, "product", id);
    await deleteDoc(userDoc)
    alert('Succesfully Deleted')
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(productcollection)
      setproduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getUsers()
  })


  return (
    <div className='main'>

      <h1 className='head'> Admin Panel </h1>
      <div>
        <h2> User Logged In : {user.name}</h2>
      </div>
      <Button onClick={() => logout({ returnTo: window.location.origin })} variant="contained">Log Out</Button>


      <div className='new-product'>
        <h3 className='head-2'>  Add new products </h3>
        <div className='new-procuct-input'>
          <TextField className='product-inp' onChange={(event) => { setnewtitle(event.target.value) }} id="outlined-basic" label=" Product Title " variant="outlined" />
          <TextField className='product-inp' onChange={(event) => { setnewprice(event.target.value) }} id="outlined-basic" label=" Price " variant="outlined" />
          <TextField className='product-inp' onChange={(event) => { setnewurl(event.target.value) }} id="outlined-basic" label=" Add Image URL " variant="outlined" />
        </div>
        <div className='Button-New'>
          <Button variant="contained" size="large" onClick={() => addproduct()}>Add procuct</Button>
        </div>
      </div>

      <h2 className='head'> Already Avialable products </h2>
      <div className='old-products'>

        {product.map((user) => {
          return (
            <>
              <div className='oldprod-main'>
                <div className='prod'>
                  <div className='prod-main'>
                    <img className='prod-img' src={user.url} alt='err'></img>
                  </div>
                  <div className='prod-title'>
                    <p>{user.title}</p>
                  </div>
                  <div className='prod-price'>
                    <p>{user.price}</p>
                  </div>

                  <div className='prod-delete'>
                    <button onClick={() => { deleteProd(user.id) }}>Delete</button>
                  </div>

                </div>
              </div>
              {/* <div className='item'>
              <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                      <CardMedia
                          component="img"s
                          height="180"
                          src={user.url}
                          alt="green iguana"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div"> {user.title} </Typography>
                          <Typography variant="body2" color="text.secondary">
                              {user.tag}
                          </Typography>
                      </CardContent>

                  </CardActionArea>

                  <div className='card-info'>
                      <h3>₹ {user.price} </h3>
                      <Button className='del-btn' onClick={()=>{deleteProd(product.id)}} size="large"> Delete < MdDelete size={20}/></Button>
                  </div>


              </Card>
              </div> */}
            </>

          )
        }
        )}
      </div>

    </div>
  )
}

export default Admin