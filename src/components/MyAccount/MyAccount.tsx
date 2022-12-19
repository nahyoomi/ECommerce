import React from 'react'
import './MyAccount.scss';
import { TiUser } from "react-icons/ti";

function MyAccount() {
  return (
    <div className='userBtn'>
        <span className='userBtn_box'>
          <TiUser></TiUser>
          <span className='myAccount'>My Account</span>
        </span>
    </div>
  )
}

export default MyAccount