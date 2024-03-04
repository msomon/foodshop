
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CartItem from '../hooks/CartItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router';
import axios from 'axios';


const CheckoutForm = () => {
  const stripe = useStripe()
const elements =useElements()
const[cardErr ,setCardErr] = useState('');
const[success ,setSuccess] = useState('');
const[processing ,setProcessing] = useState(false)
const[transactionId ,setTransactionId] = useState('');
const [clintSecret ,setClintSecret] = useState('');
const [cart ,refetch] = CartItem()
const [user] = useAuthState(auth)
const navigate = useNavigate()

const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

useEffect( ()=>{
  
  const url = 'http://localhost:5000/create-payment-intent'
   
    axios.post(url ,{totalSum})
    .then(res =>{
      if(res?.data?.clientSecret){
        setClintSecret(res?.data?.clientSecret)
        
      }
      
    })
   
    
  },[totalSum])
  

  

  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(!stripe || !elements){
      return 
    }

    const card = elements.getElement(CardElement)
    if(card === null){
      return 
    }
    const {error , paymentMethod} = await stripe.createPaymentMethod({
      type: 'card' ,
      card 

    })

    if(error){
      
      setCardErr(error ? error.message : '')
      setSuccess('')
    }else{
    
      setProcessing(true)
    }


    //  confirm card payment //
    const {paymentIntent, error:intentErr} = await stripe.confirmCardPayment(
      clintSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name || user.displayName,
            email:user.email 
          },
        },
      },
    );
    if(intentErr){
      setCardErr(intentErr?.message)
      setSuccess('')
      setProcessing(false)
    
    }else{
      setCardErr('')
      
      if(paymentIntent.status == "succeeded"){
        
        setTransactionId(paymentIntent?.id)
        setSuccess('Your Payment Is Completed')
        refetch()
      }
      //  store payment in database  //
      const payment={
        transactionId : paymentIntent.id ,
        date: new Date() ,
        total:totalSum ,
        email:user?.email,
        item: cart?.map(item=>item)
      }



      axios.post(`http://localhost:5000/payment/${user.email}` , payment )
      .then(res =>{
        setProcessing(false)

      })

    

    }

  }



 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-3' type="submit" disabled={  success || !stripe || !clintSecret}>
        Pay
      </button>
      
    </form>
    { cardErr && <span className='text-red-500'>{cardErr}</span>}
    { success && <div className='text-green-500'>
      <p>{success}</p>
      <p>Your Transsaction Id : <span className='text-orange-600 text-bold'>{transactionId}</span> </p>
      </div>}
    </>
  );
};

export default CheckoutForm;