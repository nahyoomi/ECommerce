import { NavLink,useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import './Login.scss'
import Swal from 'sweetalert2'
import { FaArrowRight } from "react-icons/fa";

function Login() {
  let navigate = useNavigate();
  const [ subscribe, setSubscribe]= useState({
    name:"",
    email:"",
  })

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    Swal.fire({
      title: 'Sucess!',
      text: 'Succesful Login',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    navigate(`/`);
  }

  const handleChange =(e:any)=>{
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...subscribe,
      [name]: value,
    };
    setSubscribe(newValues)
  }

  return (
    <Layout>
      <div className='accessing'>
        <div className='accessing__fieldset'>
          <div className='accessing__heading'>
            <h3 className='accessing__heading--title'>Sign in to ShopIt!</h3>
            <br/>
            <div className='accessing__body'>
              <form onSubmit={handleSubmit} className='accessing__form'>
                <div className='accessing__fields'>
                  <div className='accessing__fields--item'>
                    <label> *Email</label>
                    <input
                      name="email"
                      type="email"
                      value={subscribe.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                      required
                      min="3"
                      max="30"
                    />
                  </div>
                </div>
                <div>
                  <div className='accessing__fields--item'>
                    <label> *Password</label>
                    <input
                      name="name"
                      type="password"
                      value={subscribe.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      required
                      min="3"
                      max="30"
                    />
                  </div>
                </div>
                  <br/>
                  <div className='accessing__fields--forget'>
                    <NavLink to={'*'}>
                      <span>Forgot password?</span>
                    </NavLink>
                    <button type="submit">Sing In <FaArrowRight/></button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div className='accessing__fields--account'>
          <span>Don´t have an account? </span>
          <button>Sing Up</button>
        </div>
      </div>
    </Layout>
  )
}

export default Login