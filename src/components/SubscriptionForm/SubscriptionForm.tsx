import  {useState} from 'react';
import './SubscriptionForm.scss';

function SubscriptionForm() {
  const [ step, setStep]= useState(false)
  const [ subscribe, setSubscribe]= useState({
    name:"",
    email:"",
  })

  const handleSubmit =(e:any)=>{
    e.preventDefault();
    setStep(true)
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
    <div  className='fullform'>
      {step
        ?
        <div className='fullform__subscribe'>
          <p className='fullform__subscribe--text'> Hello! <strong>{subscribe.name}</strong>, you have been succefully subscribe with email: <strong>{subscribe.email}</strong>. Enjoy the benefits!</p>
        </div>
        :
        <>
        <h2> Join our news and promotions!</h2>
        <form onSubmit={handleSubmit} className='fullform__form'>
            <input
                name="name"
                type="text"
                value={subscribe.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
                min="3"
                max="30"
            />
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
            <button type="submit">Subscribe</button>
        </form>
        </>
      }
        
    </div>
  )
}

export default SubscriptionForm;