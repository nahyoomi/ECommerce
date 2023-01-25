import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAccount.scss';

function MyAccount() {
  let navigate = useNavigate();

  return (
    <div className='useractions'>
      <button onClick={()=>  navigate(`/login`) }>Sing Up</button>
      <button onClick={()=>  navigate(`/login`) }>Sign In</button>
    </div>
  )
}

export default MyAccount