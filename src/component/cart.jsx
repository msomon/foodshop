
import CartItem from '../hooks/CartItem';
import Item from './item';
import Loading from '../Share/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [user] = useAuthState(auth)

    const [cart] = CartItem()

    if(!cart){
      return <Loading></Loading>
    }

    

  
    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);



    

    return (
        <div className='lg:flex lg:justify-evenly mt-10 md:mt-20 lg:mt-20 mx-auto'>
 
            <div className=' gap-3  justify-center items-center lg:w-2/6 md:w-full w-full sm:mx-auto '>

            {
                cart?.map((item,index)=><Item key={index} item={item} ></Item>)
            }
            </div>

    <div className="flex  gap-5 h-60 w-[320px] lg:w-96 card   bg-base-100 shadow-xl justify-center  items-center sm:mx-auto ">
        
       <h1 className='text-2xl'>Subtotal :${totalSum}</h1>
      
       {cart.length &&   <h1 className='text-xl'>Delivery :${1}</h1>
       }
      
       {cart.length &&  <h1  className='text-xl'>Total:${totalSum + 1}</h1>
       }
      
       
    
    <Link disabled={!cart.length ? true : false}  to={"/dashboard/payment"}><button className='btn btn-success' >Pay</button></Link>
         
      </div>

        </div>
    );
};

export default Cart;