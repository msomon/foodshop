import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import CartItem from '../hooks/CartItem';
import Loading from '../Share/Loading';
const stripePromise = loadStripe("pk_test_51L44ajDHVcHNosnNxn4BUHtQTdQdnfNCjZfNhJI7GyEIgMauYiQ533fND4NnT0M7Abm5mBC9KUiuqcSMDpGeZNAJ00Imp6BOkW");



const Payment = () => {
  const [cart] = CartItem()

  if(!cart){
    return <Loading></Loading>
  }


  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);



  return (

    <div className='min-h-screen grid lg:grid-cols-2 gap-4 mb-5 mt-3'>

    <div className="flex  gap-5 h-60 w-[320px] lg:w-96 card   bg-base-100 shadow-xl justify-center  items-center sm:mx-auto ">
        
       <h1 className='text-2xl'>Subtotal :${totalSum}</h1>
      
       {cart.length &&   <h1 className='text-xl'>Delivery :${1}</h1>
       }
      
       {cart.length &&  <h1  className='text-xl'>Total:${totalSum + 1}</h1>
       }
      
       
      </div>

<div className="card w-[320px] lg:w-[400px] mx-auto h-[200px] shadow-2xl bg-base-100 lg:mt-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
    </div>
  );
};

export default Payment;