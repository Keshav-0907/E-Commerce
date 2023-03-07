import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material'



const logo = (
  <div className=""> 
        <Link to="/">
          <h2> Click <span> Shop </span> </h2>
        </Link>
        </div>
)

const Header = () => {


  const { loginWithRedirect } = useAuth0();


  return (
    <header> 
      <div className="nav-main">
        <div>
          {logo}
        </div>
        
        <div className='nav-links'>
            <ul>
              <li> <NavLink to='/'>Home </NavLink> </li>
              <li> <Link to='/Contact'> Deals </Link> </li>
              <li> <Link to='/About'> What's New? </Link>  </li>
              <li> <Link to='/About'> Delivery </Link>  </li>
              <li> <Link to='/About'> About </Link>  </li>
            </ul>
        </div>

        <div className='nav-search'>
          <input className='search-box' type="search" placeholder='Search Products'></input>
        </div>

          

        <div className="nav-admin">
            <Button onClick={()=>loginWithRedirect()}> Admin Login</Button>
            <Link to='/Admin'> Admin </Link>
        </div>
        

        <div className="nav-cart">
        <Link to='/cart'> Cart </Link>
        </div>
      </div>
    </header>
    )
}

export default Header