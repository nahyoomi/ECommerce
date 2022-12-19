import React from 'react'
import './MyAccount.scss';
import { HiOutlineUser } from "react-icons/hi";

function MyAccount() {
  return (
    <div className='userBtn'>
        <button><HiOutlineUser></HiOutlineUser> My Account</button>
    </div>
  )
}

export default MyAccount