import React from 'react'

function Orderby() {
  return (
    <div className='orderby'>
      <label className='orderby__label'>
        Order by:
      </label>
        <select>
          <option>--Select--</option>
          <option value='A-Z'>A-Z</option>
          <option value='Best Rated'>Most Rated</option>
          <option value='Lower Price'>Lower Price</option>
          <option value='Higher Price'>Higher Price</option>
        </select>
    </div>
  )
}

export default Orderby