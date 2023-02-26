import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Auth.module.scss"
import { auth } from './config'
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'





const Register = () => {


    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const reg = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
          console.log("Ho gya Register")
        } catch (error) {
          console.log(error.message);
        }
      };



  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img className="login-img" src='https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000' width={550} alt=''></img>
        </div>

        <div className={styles.form}>
            <h2> Register </h2>
            <form>
                <input 
                    type='text' 
                    placeholder='User Name' 
                    onChange={(event)=>setRegisterEmail(event.target.value)} 
                    required 
                />

                <input 
                type='password' 
                placeholder='Password' 
                onChange={(event)=> {setRegisterPassword(event.target.value)}} 
                required
                />

                <button className='--btn --btn-block' onClick={()=>reg()}> Register </button>

                <div className={styles.links}>
                    <Link to='/login'> Login </Link>
                </div>

            </form>
        </div>
    </section>
  )
}

export default Register;