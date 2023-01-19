import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

function Login() {
  return (
    <Layout>
        <div className='registration'>
          <div className='registration__fields'>
            <div>
              <h3>Sing in to ShopIt!</h3>
              <br/>
              <div>
                <form>
                  <div>
                    <div>
                      <label>Email</label>
                      <input type='email'/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Password</label>
                      <input type='password'/>
                    </div>
                  </div>
                  <br/>
                  <div>
                    <NavLink to={'*'}>
                      <span>Forgot password?</span>
                    </NavLink>
                    <button>Sing In</button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <h6>OR</h6>
            </div>
            <div>
              <button><span>I</span>Continue with Facebook</button>
              <button><span>I</span>Continue with Google</button>
              <button><span>I</span>Continue with Github</button>
            </div>
          </div>
          <div className='registration__options'>
            <span><strong>Don´t have an account?</strong></span>
            <button>Sing Up</button>
          </div>
        </div>
    </Layout>
  )
}

export default Login