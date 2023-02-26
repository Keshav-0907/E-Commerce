import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Auth.module.scss"
import { useState } from 'react'
import { signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import { auth } from './config'

function Login() {

  const [user1, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

    const [loginEmail, setloginemail] = useState("")
    const [loginPassword, setloginpassword] = useState("")

    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        alert('dd');
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img className="login-img" src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' width={500} alt=''></img>
        </div>

        <div className={styles.form}>
            <h2> Logidn </h2>
            <form>

                <input 
                type='text' placeholder='User Name' 
                onChange={(event)=>
                  {setloginemail(event.target.value)}}
                required 
                />

                <input 
                type='password' 
                placeholder='Password' 
                onChange={(event)=>
                  {setloginpassword(event.target.value)}}
                required/>

                <button className='--btn --btn-block' onClick={()=>login()}> Log In </button>

                <div className={styles.links}>
                    <Link to='/register'> Register Now </Link>
                </div>

            </form>
        </div>
    </section>
  )
}

export default Login