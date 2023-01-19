import React from 'react'

function AcceptedCards() {
  return (
    <div className='cards'>
        <span className='cards__title'>Accepted Cards</span>
        <div className='cards__images'>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
            <div>Img Card</div>
        </div>
        <br/>
        <div className='cards__field'>
            <div className='cards__field--fieldset'>
                <div className='field'>
                    <div className='field__group'>
                        <span>Name is Required</span>
                        <input type='text'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='field__group'>
                        <label>*Card Number</label>
                        <input type='text'/>
                    </div>
                </div>
            </div>
            <div className='cards__field--fieldset'>
                <div className='field'>
                    <div className='field__group'>
                        <label>*Expiry Date</label>
                        <input type='date'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='field__group'>
                        <label>*CCV</label>
                        <input type='text'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AcceptedCards