import { NavLink,useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import './Login.scss'
import Swal from 'sweetalert2'

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
        <div className='registration'>
          <div className='registration__fields'>
            <div>
              <h3 className='registration__title' >Sing in to ShopIt!</h3>
              <br/>
              <div>
                <form onSubmit={handleSubmit} >
                  <div>
                    <div className='registration__input'>
                      <label>Email</label>
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
                    <div className='registration__input'>
                      <label>Password</label>
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
                  <div className='registration__forget'>
                    <NavLink to={'*'}>
                      <span>Forgot password?</span>
                    </NavLink>
                    <button type="submit">Sing In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='registration__forget'>
            <span><strong>Don´t have an account?</strong></span>
            <button>Sing Up</button>
          </div>
        </div>
    </Layout>
  )
}

export default Login