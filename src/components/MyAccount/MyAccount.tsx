import React from 'react'
import './MyAccount.scss';
import { useNavigate } from 'react-router-dom'

function MyAccount() {
  let navigate = useNavigate();
  return (
    <div className='userBtn'>
      <button>Sing Up</button>
      <button onClick={()=>  navigate(`/login`) }>Sign In</button>
    </div>
  )
}

export default MyAccount