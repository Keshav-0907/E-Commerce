import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import heroimage from '../Images/Hero.png'
import trust from '../Images/trust.png'
import boost from '../Images/boost.png'
import support from '../Images/support.png'

const Home = () => {
  return (
    <>
    <div className='home-main'>

      <div className='hero-main'>

        <div className='hero-txt-btn'>
          <div className='hero-txt'>
            <h2> Get 15% <span className='herotxt-hl'>Cash-Back</span> <br/> on order over Rs. 300 </h2>
          </div>

          <div className='hero-btn'>
            <Link to='/Products'><input className='btn-1' type="button" value="Get Started"></input></Link>
          
          </div>
        </div>
        <div className='hero-img'>
          <img src={heroimage} alt='img'></img>
        </div>
      </div>
    </div>

    <div className='home-trust'>

      <div className='trust-icon'>

          <div className='trust-1'>
            <img src={trust} alt='trust' width="100px"></img>
            <p>100% Trust-worthy</p>
          </div>

          <div className='trust-2'>
            <img src={boost} alt='boost'></img>
            <p>Provides boost <br/> to your business</p>
          </div>

          <div className='trust-3'>
            <img src={support} alt='support'></img>
            <p>24 x 7 <br/> Customer Support</p>
          </div>

          <div className='trust-txt'>
            <h3> Why to Choose <br/>Click-Shop ??</h3>
          </div>
      </div>
    </div>

      
      
      </>
  )
}

export default Home