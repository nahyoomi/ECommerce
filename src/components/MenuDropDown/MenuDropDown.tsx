import React from 'react'
import MyAccount from '../Modal/Modal';
import './MenuDropDown.scss';
function MenuDropDown({setShowMenu} : any) {

  const handleClose = () => {
    setShowMenu(false)
  }
  return (
    <div className='boxing'>
      <div className='boxing_modal'>
        <div className='boxing_modal--heading'>
          <button 
            className='btn_CloseModal'
            onClick={handleClose}
            >X</button>
        </div>
        <div className='boxing_content'>
          <span>My Account</span>
        </div>
      </div>
      <MyAccount />
    </div>
  )
}

export default MenuDropDown;